import React from 'react';
import Cmd from '../common/Cmd';

export default function CreateFile({ children: file }) {
  return (
    <Cmd>
      touch {file}
    </Cmd>
  );
}