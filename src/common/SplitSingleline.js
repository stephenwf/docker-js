import React from 'react';
import Line from './Line';

export default function SplitSingleline({ children }) {
  const textNodes = Array.isArray(children) ? children.map((line, n) => (
    <Line withBreak={children.length - 1 !== n}>
      { n === 0 ? '' : '    '}
      { line }
      {children.length - 1 === n ? '' : <span style={{ color: '#DDD' }}> \</span>}
    </Line>
  )) : children;

  return (
    <span>
      { textNodes }
    </span>
  );
}