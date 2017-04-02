import React from 'react';
import Cmd from '../common/Cmd';

export default function Chmod({ children: dir, perms, recursive }) {
  return (
    <Cmd>
      chmod {perms} {dir} {recursive ? '-R' : ''}
    </Cmd>
  );
}
