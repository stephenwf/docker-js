import React from 'react';
import Cmd from '../common/Cmd';

export default function Cd({ dir }) {
  return <Cmd>cd {dir}</Cmd>;
}