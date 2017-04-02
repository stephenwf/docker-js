import React from 'react';

export default function Section({ name, children }) {
  return (
    <span>
      { name ? <span style={{ color: '#BBB' }}># {name} {"\n"}</span> : null }
      { children }
      {"\n"}
    </span>
  );

}