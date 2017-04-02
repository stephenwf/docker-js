import React from 'react';
import Line from '../common/Line';
import Multiline from '../common/Multiline';

export default function Run({ children }) {
  return (
    <Line spaced>
      <span style={{ color: '#a71d5d' }}>RUN</span> <Multiline>{ children }</Multiline>
    </Line>
  );
}