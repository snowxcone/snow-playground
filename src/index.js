import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import backdrop from './imgs/backdrop.jpg';
import { Card } from './components/Card';
import { Snow } from './components/Snow';
import { WigglyText } from './components/WigglyText';

ReactDOM.render(
  <React.StrictMode>
    <img id="bg-image" src={backdrop} alt="Background clouds" />
    <h1>Snow's ReactJS Playground! Click somewhere :o</h1>

    <Snow />

    <WigglyText text="Hover over me!" />
    <div>
      <ul className='circle-container-outer'>
        <li><Card title="R" /></li>
        <li><Card title="O" /></li>
        <li><Card title="Y" /></li>
        <li><Card title="G" /></li>
        <li><Card title="B" /></li>
        <li><Card title="I" /></li>
        <li><Card title="V" /></li>
      </ul>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);
