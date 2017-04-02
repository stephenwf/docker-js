import React from 'react';
import Symlink from '../bash/Symlink';

export function StdOut({ children: file }) {
  return <Symlink to="/dev/stdout" from={file}/>
}

export function StdErr({ children: file }) {
  return <Symlink to="/dev/stderr" from={file}/>
}