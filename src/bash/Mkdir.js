import React from 'react';
import Cmd from '../common/Cmd';
import Multiline from '../common/Multiline';
import Chmod from './Chmod';

export default function Mkdir({ children, perms }) {
  return (
    <Multiline>
      <Cmd>mkdir -p {children}</Cmd>
      { perms ? <Chmod perms={perms}>{children}</Chmod> : null }
    </Multiline>
  );
}
