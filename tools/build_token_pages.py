"""Build the 47 /t/<addr> pages from the captured reference DOM.

The reference builds these pages per token, and the captures show 18 distinct
structures (trades table vs empty state, quote asset, graduation state...), so
they are shipped as prerendered snapshots of the captured markup rather than
re-modelled by hand. Everything a browser needs is local: framework scripts are
dropped, RSC flight payloads are dropped, assets are rewritten to the clone's
own paths, and the page's own inline stylesheet is kept.

Output: repo/public/t/<addr>/index.html  (+ shared /t/face.css, /t/pg-<hash>.css)
"""
import collections
import hashlib
import os
import re
import urllib.request

CAP = '/home/user/tokens'
REPO = '/home/user/repo'
OUT = os.path.join(REPO, 'public', 't')
UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/128.0 Safari/537.36')

TOGGLE = """<script>(function(){
var root=document.documentElement;
document.addEventListener('click',function(e){
  var t=e.target&&e.target.closest?e.target.closest('[aria-label="Switch theme"]'):null;
  if(!t)return;
  var next=root.getAttribute('data-theme')==='dark'?'light':'dark';
  root.setAttribute('data-theme',next);
  try{localStorage.setItem('aozi-theme',next)}catch(err){}
},false);
function jump(){var h=decodeURIComponent(location.hash.replace(/^#/,''));if(!h)return;
  var el=document.querySelector('[data-anchor="'+h.replace(/["\\\\]/g,'')+'"]');if(el)el.scrollIntoView();}
window.addEventListener('hashchange',jump);window.addEventListener('load',jump);
})();</script>"""

addrs = [l.strip() for l in open('/home/user/tokens.txt') if l.strip()]


def clean(html, style_links):
    html = re.sub(r'<script[^>]*src="/_next/[^"]*"[^>]*>\s*</script>', '', html)
    html = re.sub(r'<script[^>]*src="/_next/[^"]*"[^>]*/>', '', html)
    html = re.sub(r'<script>(?:self\.__next_f|\(self\.__next_f).*?</script>', '', html, flags=re.S)
    html = re.sub(r'<link[^>]*/_next/[^>]*>', '', html)
    html = re.sub(r'https://pbs\.twimg\.com/profile_images/(\d+)/([A-Za-z0-9_\-\.]+)',
                  lambda m: '/twimg/%s_%s' % (m.group(1), m.group(2)), html)
    html = re.sub(r'https://abs\.twimg\.com/sticky/default_profile_images/([A-Za-z0-9_\-\.]+)',
                  lambda m: '/twimg/%s' % m.group(1), html)
    html = html.replace('https://www.aozi.family/', '/')
    html = html.replace('\\"', '"')
    # hoist the page stylesheet
    blocks = re.findall(r'<style[^>]*>.*?</style>', html, re.S)
    if blocks:
        big = max(blocks, key=len)
        h = hashlib.sha1(re.sub(r'\s+', ' ', big).encode()).hexdigest()[:10]
        style_links.add(h)
        open(os.path.join(REPO, 'public', 't', 'pg-%s.css' % h), 'w', encoding='utf-8').write(
            re.sub(r'^<style[^>]*>|</style>$', '', big, flags=re.S))
        html = html.replace(big, '<link rel="stylesheet" href="/t/pg-%s.css">' % h, 1)
    html = html.replace('</head>', '<link rel="stylesheet" href="/t/face.css">\n%s\n</head>' % TOGGLE, 1)
    return html


def main():
    os.makedirs(OUT, exist_ok=True)
    face = open(os.path.join('/home/user', 'face.css'), encoding='utf-8').read()
    open(os.path.join(REPO, 'public', 't', 'face.css'), 'w', encoding='utf-8').write(face)

    # 1. every asset the token pages need must exist in public/
    have = set()
    for d in ('i', 'img', 'twimg', 'fonts'):
        p = os.path.join(REPO, 'public', d)
        if os.path.isdir(p):
            have.update(os.listdir(p))
        for root, _, files in os.walk(p):
            have.update(files)
    need = {}
    for a in addrs:
        h = open(os.path.join(CAP, '%s.html' % a), encoding='utf-8', errors='replace').read()
        h = clean(h, set())
        for m in re.finditer(r'(?:src|href)="(/(?:i|twimg|img|fonts)/[^"]+)"', h):
            need.setdefault(m.group(1), set()).add(a)
    missing = [p for p in sorted(need) if p.split('/')[-1] not in have]
    print('assets referenced by token pages:', len(need), 'missing:', len(missing))

    def fetch(path):
        url = 'https://www.aozi.family' + path
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        try:
            b = urllib.request.urlopen(req, timeout=60).read()
        except Exception as e:
            return path, 0, str(e)
        dst = os.path.join(REPO, 'public', path.lstrip('/'))
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        open(dst, 'wb').write(b)
        return path, len(b), 'ok'

    import concurrent.futures as cf
    with cf.ThreadPoolExecutor(8) as ex:
        for path, n, st in ex.map(fetch, missing):
            print('  fetch %-70s %8d %s' % (path, n, st))

    # 2. prerender
    styles = set()
    total = 0
    for a in addrs:
        html = open(os.path.join(CAP, '%s.html' % a), encoding='utf-8', errors='replace').read()
        html = clean(html, styles)
        d = os.path.join(OUT, a)
        os.makedirs(d, exist_ok=True)
        open(os.path.join(d, 'index.html'), 'w', encoding='utf-8').write(html)
        total += len(html)
    print('wrote %d pages, %.1f MB, %d shared page stylesheets' % (len(addrs), total / 1e6, len(styles)))


main()
