import { Fragment } from 'react';
import type { Segment } from '../types';

/** Renders tweet text runs, re-creating the reference's inline blue links. */
export function Segments({ parts }: { parts: Segment[] }) {
  return (
    <>
      {parts.map((p, i) =>
        p.link ? (
          <span key={i} style={{ color: '#1d9bf0' }}>
            {p.t}
          </span>
        ) : (
          <Fragment key={i}>{p.t}</Fragment>
        ),
      )}
    </>
  );
}
