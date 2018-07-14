import * as React from 'react';
import { render } from 'react-dom';
import Hello from '../docs/Hello.mdx';

render(
  <div>
    <h1>Hello!!!</h1>
    <Hello />
  </div>,
  document.getElementById('root')
);
