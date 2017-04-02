import React from 'react';
import Cmd from '../common/Cmd';
import SplitSingleline from '../common/SplitSingleline';
import Section from '../common/Section';
import Run from '../docker/Run';

export function AptGet({ update, install }) {
  return (
    <Section name="Dependencies">
      <Run>
        { update ? (
          <span>
              <Cmd>apt-get update</Cmd>
              <Cmd>apt-get upgrade -y</Cmd>
            </span>
        ) : null }
        <Install>
          {install}
        </Install>
      </Run>
    </Section>
  );
}

export function Install({ children }) {
  const installCommand = ['apt-get install -y', ...children];
  return (
    <SplitSingleline>
      {installCommand}
    </SplitSingleline>
  );
}
