import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Alert from './components/Alert/Alert';

import './styles/index.scss';

library.add(fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert title="success alert" type="error" description="more text description" showIcon />
        <Alert title="success alert" type="info" description="more text description" showIcon />
        <Alert title="success alert" type="success" description="more text description" showIcon />
        <Alert title="success alert" type="warning" description="more text description" closeText="close" showIcon />
      </header>
    </div>
  );
}

export default App;
