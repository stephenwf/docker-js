import React from 'react';

export default function Line({ children, spaced = false, withBreak = true }) {
  return <span>
    {children} {withBreak ? "\n" : ''}{spaced ? "\n" : ''}
  </span>
}