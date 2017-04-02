import React from 'react';
import Line from '../common/Line';

export default function Copy({ from, to }) {
  return (
    <Line spaced>
      <span style={{ color: '#a71d5d' }}>COPY</span> {from} {to}
    </Line>
  );
}