import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dockerfile from './docker/Dockerfile';
import { AptGet } from './bash/Apt';
import { ComposerInstall, ComposerPreInstall, ConfigurePHP, PHPComposer } from './extensions/Php';
import Nginx from './extensions/Nginx';
import Copy from './docker/Copy';
import Mkdir from './bash/Mkdir';
import Run from './docker/Run';
import Section from './common/Section';
import Touch from './bash/Touch';
import {StdOut, StdErr} from './docker/Streams';

export default class App extends Component {

  constructor() {
    super();
    this.state = { plain: '' };
  }

  generate() {
    this.setState({ plain: ReactDOM.findDOMNode(this.dockerfile).innerText });
  }

  render() {
    return <div>
      <code>
        <pre>
          <Dockerfile ref={(ref) => this.dockerfile = ref} baseImage="php" tag="7.0-fpm">

            {/* Getting up and running */}
            <AptGet install={['git', 'curl']}/>
            <Nginx/>

            {/* PHP Specific */}
            <Section name="PHP configuration">
              <PHPComposer />
              <ConfigurePHP extensions={['zip', 'pdo', 'pdo_mysql', 'pcntl']}/>
              <ComposerPreInstall dir="./myapp" target="/symfony"/>
            </Section>

            {/* Application Specific */}
            <Section name="Application build">
              <Copy from="./myapp" target="/symfony"/>
              <ComposerInstall target="/symfony"/>
              <Run>
                <Mkdir perms="755">/symfony/var/cache</Mkdir>
                <Mkdir perms="755">/symfony/var/logs</Mkdir>
                <Touch>/symfony/var/logs/all.log</Touch>
                <StdOut>/symfony/var/logs/all.log</StdOut>
                <Touch>/symfony/var/logs/error.log</Touch>
                <StdErr>/symfony/var/logs/error.log</StdErr>
              </Run>
            </Section>

          </Dockerfile>
        </pre>
      </code>
      <button onClick={() => this.generate()}>Generate</button>
      <textarea value={this.state.plain ? this.state.plain : ''}/>
    </div>
  }
}
