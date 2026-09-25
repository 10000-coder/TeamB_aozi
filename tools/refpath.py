"""Locate the shared reference package regardless of where a script sits."""
import os

_CANDIDATES = [
    'shared/aozi_reference',
]


def find_ref(start=None):
    d = os.path.abspath(start or __file__)
    for _ in range(8):
        d = os.path.dirname(d)
        if not d or d == '/':
            break
        for c in _CANDIDATES:
            p = os.path.join(d, c)
            if os.path.isdir(p):
                return p
    return os.path.abspath('shared/aozi_reference')


REF = find_ref()
