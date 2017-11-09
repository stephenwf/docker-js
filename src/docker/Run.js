import React from 'react';
import Line from '../common/Line';
import Multiline from '../common/Multiline';

export default function Run({ children }) {
  return (
    <Line spaced>
      <span style={{ color: '#2F89F6' }}>RUN</span> <Multiline>{ children }</Multiline>
    </Line>
  );
}
