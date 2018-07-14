import * as React from 'react';
import { render } from 'react-dom';
import Hello from '../docs/Hello.mdx';

console.log(Hello.toString());
render(
  <div>
    <h1>Hello!!!</h1>
    <Hello />
  </div>,
  document.getElementById('root')
);
