import React from 'react';
import SplitSingleline from '../common/SplitSingleline';
import Cmd from '../common/Cmd';
import Run from '../docker/Run';
import Copy from '../docker/Copy';
import { AppendFile } from '../bash/Echo';
import Cd from '../bash/Cd';

export function PHPExtensions({ extensions }) {
  // const lines = ['docker-php-ext-install', ...extensions];
  return (
    <SplitSingleline>
      <Cmd>docker-php-ext-install</Cmd>
      { extensions }
    </SplitSingleline>
  );
}

export function ConfigurePHP({ timezone = 'Europe/London', extensions }) {
  return (
    <Run>
      <AppendFile file="/usr/local/etc/php/conf.d/php.ini">
        date.timezone = "{timezone}"
      </AppendFile>
      <PHPExtensions extensions={extensions}/>
    </Run>
  );
}

export function PHPComposer({ version }) {
  return (
    <Run>
      <Cmd>curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer</Cmd>
      { version ? <Cmd>composer self-update</Cmd> : null }
    </Run>
  )
}

export function ComposerInstall({ target }) {
  return (
    <Run>
      <Cd dir={target}/>
      <Cmd>composer install --no-interaction</Cmd>
    </Run>
  );
}

export function ComposerPreInstall({ dir, target }) {
  return (
    <Cmd>
      <Copy from={`${dir}/composer.json`} to={`${target}/composer.json`}/>
      <Copy from={`${dir}/composer.lock`} to={`${target}/composer.lock`}/>
      <Run>
        <Cd dir={target}/>
        <Cmd>composer install --no-scripts --no-autoloader --no-interaction</Cmd>
      </Run>
    </Cmd>
  );
}