import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Icon from './components/Icon/icon';
import Alert from './components/Alert/Alert';
import Button from './components/Button/Button';
import Badge from './components/Badge/Badge';

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
        <br />
        <br />
        <Button>Primary Button</Button>
&nbsp;
        <Button type="primary">Primary Button</Button>
&nbsp;
        <Button type="success">Primary Button</Button>
&nbsp;
        <Button type="warning">Primary Button</Button>
&nbsp;
        <Button type="danger">Primary Button</Button>
&nbsp;
        <Button type="info">Primary Button</Button>
&nbsp;
        <Button type="text">Primary Button</Button>

        <br />
        <br />
        <Button disabled>Primary Button</Button>
&nbsp;
        <Button type="success" disabled>Primary Button</Button>
&nbsp;
        <Button type="text" disabled>Primary Button</Button>
&nbsp;

        <br />
        <br />
        <Button size="large" type="success">Large Button</Button>
&nbsp;
        <Button type="success">Default Button</Button>
&nbsp;
        <Button size="small" type="success">Small Button</Button>
&nbsp;
        <Button size="mini" type="success">Mini Button</Button>
&nbsp;
        <br />
        <br />

        <Button type="primary" loading>Loading Button</Button>
        &nbsp;
        <Button loading>Loading Button</Button>
        &nbsp;
        <Button type="text" loading>Loading Button</Button>

        <br />
        <br />

        <Button type="primary" icon="bars-progress">Loading Button</Button>
&nbsp;
        <Button type="success" icon="circle-user">Loading Button</Button>
&nbsp;
        <Button type="primary" size="large" icon="truck">Loading Button</Button>
&nbsp;
        <Button type="primary" icon="landmark" />
&nbsp;
        <Button type="primary" size="mini" icon="landmark">Loading Button</Button>
&nbsp;
        <Button type="primary">
          Loading Button
          <Icon icon="truck" theme="light" />
        </Button>
&nbsp;
        <br />
        <br />
        <Button type="primary" plain>Primary Button</Button>
&nbsp;
        <Button type="success" plain>Primary Button</Button>
&nbsp;
        <Button type="warning" plain>Primary Button</Button>
&nbsp;
        <Button type="danger" plain>Primary Button</Button>
&nbsp;
        <Button type="info" plain>Primary Button</Button>
        <br />
        <br />

        <Badge value={8}>
          <Button>Primary Button</Button>
        </Badge>
        &nbsp;
        &nbsp;
        <Badge value={16}>
          <Button>Primary Button</Button>
        </Badge>
        <br />
        <br />
        <Badge value={150} max={99}>
          <Button>Primary Button</Button>
        </Badge>
        &nbsp;
        &nbsp;
        <Badge value={12} max={10}>
          <Button>Primary Button</Button>
        </Badge>

        <br />
        <br />
        <Badge value="new">
          <Button>Primary Button</Button>
        </Badge>
        &nbsp;
        &nbsp;
        <Badge value="hot">
          <Button>Primary Button</Button>
        </Badge>

        <br />
        <br />
        <Badge value="new" type="primary">
          <Button>Primary Button</Button>
        </Badge>
        &nbsp;
        &nbsp;
        <Badge value="hot" type="info">
          <Button>Primary Button</Button>
        </Badge>
        <br />
        <br />
        <Badge isDot>
          <Button>Primary Button</Button>
        </Badge>
        &nbsp;
        &nbsp;
        <Badge isDot value={10}>
          <Button>Primary Button</Button>
        </Badge>
      </header>
    </div>
  );
}

export default App;
