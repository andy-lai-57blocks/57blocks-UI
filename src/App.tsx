import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Icon from './components/Icon/icon';

library.add(fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="success" size="10x" />
      </header>
    </div>
  );
}

export default App;
