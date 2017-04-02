import React from 'react';
import Run from '../docker/Run';
import {Install} from '../bash/Apt';
import {ClearFile} from '../bash/Echo';
import {StdOut, StdErr} from '../docker/Streams';
import Section from '../common/Section';

export default function Nginx() {
  return (
    <Section name="Nginx">
      <Run>
        <Install>nginx</Install>
        <ClearFile file="/etc/nginx/sites-available/default"/>
        <StdOut>/var/log/nginx/access.log</StdOut>
        <StdErr>/var/log/nginx/error.log</StdErr>
      </Run>
    </Section>
  )
}