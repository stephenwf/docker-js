import React from 'react';
import Line from './Line';

export default function Multiline({ children: unfiltered }) {
  const children = unfiltered.filter(e => e);
  const textNodes = Array.isArray(children) ? children.map((line, n) => (
    children.length - 1 === n ? (
      <span>
        { n === 0 ? '' : '    '}
        { line }
      </span>
    ) : (
      <Line>
        { n === 0 ? '' : '    '}
        { line }
        <span style={{ color: '#DDD' }}> && \</span>
      </Line>
    )
  )) : children;

  return (
    <span>
      { textNodes }
    </span>
  );
}