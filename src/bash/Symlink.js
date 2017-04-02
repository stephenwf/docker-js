import React from 'react';

export default function Symlink({ to, from }) {
  return <span>ln -sf {to} {from}</span>
}