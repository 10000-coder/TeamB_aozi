"""Generate the /docs, /flywheel, /profile and /launch pages from the captured DOM.

Same contract as the home port: markup is converted 1:1 from the reference DOM
through `html_to_jsx`, and inline style strings are passed through `sx()`
verbatim, so nothing is re-authored by hand and nothing can drift.

Each route is emitted once per layout variant (desktop/mobile x light/dark),
because the reference renders four parallel layouts and hides three of them with
CSS.  A route's own inline stylesheet is also diffed against the stylesheet the
home port already ships, so only genuinely new rules are added.

Outputs:
  shared/TeamB_aozi/src/sections/routes/<route>.tsx
  shared/TeamB_aozi/src/styles/route-<route>.css
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from refpath import REF
from bs4 import BeautifulSoup
import html_to_jsx as H

APP = os.path.join(os.path.dirname(REF), 'TeamB_aozi')
OUT = os.path.join(APP, 'src', 'sections', 'routes')
STYLES = os.path.join(APP, 'src', 'styles')
os.makedirs(OUT, exist_ok=True)

VARIANTS = [('vdl', 'Vd', 'L'), ('vdd', 'Vd', 'D'), ('vml', 'Vm', 'L'), ('vmd', 'Vm', 'D')]
ROUTES = {
    'docs': 'Docs',
    'flywheel': 'Flywheel',
    'profile': 'Profile',
    'launch': 'Launch',
}


def soup_of(route):
    return BeautifulSoup(
        open(os.path.join(REF, 'routes', '%s.html' % route), encoding='utf-8', errors='replace').read(),
        'html.parser')


def variant_wrapper(S, v):
    """The single wrapper div the variant class wraps (the reference's page body)."""
    root = None
    for el in S.find_all('div', class_=True):
        if v in el.get('class'):
            root = el
            break
    if root is None:
        raise SystemExit('no variant root for ' + v)
    return root.find('div', recursive=False)


def emit_route(route, cls):
    S = soup_of(route)
    parts = []
    for v, fam, theme in VARIANTS:
        wrapper = variant_wrapper(S, v)
        name = '%s%s%s' % (cls, fam, theme)
        code = H.convert(str(wrapper), name)
        parts.append((name, code))
    whole = '\n\n'.join(c for _, c in parts)
    header = []
    if 'sx(' in whole:
        header.append("import { sx } from '../../lib/sx';")
    if 'onImgErrorHide' in whole:
        header.append("import { onImgErrorHide } from '../../lib/img';")
    if 'onImgError=' in whole:
        header.append("import { onImgError } from '../../lib/img';")
    txt = '\n'.join(header) + '\n\n' + whole
    path = os.path.join(OUT, '%s.tsx' % route)
    open(path, 'w', encoding='utf-8').write(txt)
    print('%-42s %8d bytes  %s' % (os.path.relpath(path, APP), len(txt),
                                   ', '.join(n for n, _ in parts)))


def split_rules(css):
    """Split a stylesheet into top-level rules (brace aware)."""
    rules, depth, buf = [], 0, ''
    for ch in css:
        buf += ch
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                rules.append(buf.strip())
                buf = ''
    tail = buf.strip()
    if tail:
        rules.append(tail)
    return rules


def normalise(rule):
    return re.sub(r'\s+', ' ', rule).strip()


def emit_css(route):
    have = set()
    for f in ('site.css', 'base.css'):
        p = os.path.join(STYLES, f)
        if os.path.exists(p):
            have.update(normalise(r) for r in split_rules(open(p, encoding='utf-8').read()))
    route_css = open(os.path.join(REF, 'data', 'inline-%s.css' % route), encoding='utf-8').read()
    rules = [r for r in split_rules(route_css) if normalise(r) not in have]
    out = '\n'.join(rules) + ('\n' if rules else '')
    p = os.path.join(STYLES, 'route-%s.css' % route)
    open(p, 'w', encoding='utf-8').write(out)
    print('  css %-14s %d rules kept (%d total)' % (route, len(rules), len(split_rules(route_css))))


if __name__ == '__main__':
    for route, cls in ROUTES.items():
        emit_route(route, cls)
    for route in ROUTES:
        emit_css(route)
