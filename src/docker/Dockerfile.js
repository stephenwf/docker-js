import React, { Component } from 'react';
import Line from '../common/Line';

export default class Dockerfile extends Component {
  render() {
    const { baseImage, children, tag, digest } = this.props;

    const fromStatement = (
      tag ? `${baseImage}:${tag}` : (
        digest ? `${baseImage}@${digest}` : (baseImage)
      )
    );

    return (
      <div>
        <Line spaced>
          <span style={{ color: '#a71d5d' }}>FROM</span> {fromStatement}
        </Line>
        { children }
      </div>
    );
  }
}