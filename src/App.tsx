import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Icon from './components/Icon/icon';
import Alert from './components/Alert/Alert';
import Button from './components/Button/Button';
import Badge from './components/Badge/Badge';
import Progress from './components/Progress/Progress';
import Loading from './components/Loading/Loading';
import Notification from './components/Notification/Notification';

import './styles/index.scss';
import Collapse from './components/Collapse/Collapse';
import CollapseItem from './components/Collapse/CollapseItem';
import Radio from './components/Radio/Radio';
import RadioGroup from './components/Radio/RadioGroup';
import RadioButton from './components/Radio/RadioButton';

library.add(fas);
const openSuccess = () => {
  Notification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
    duration: 0,
    top: 200,
    onClose: () => { alert('111111'); },
    onClick: () => { alert('2222222'); }
  });
};
const openWarning = () => {
  Notification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning'
  });
};
const openInfo = () => {
  Notification({
    title: 'Info',
    message: 'This is a info message',
    type: 'info'
  });
};
const openError = () => {
  Notification({
    title: 'Error',
    message: 'This is a error message',
    type: 'error'
  });
};

function App() {
  const [radioValue, setRadioValue] = useState<string | number | boolean>('3');
  const onChangeRadio = (value: string | number | boolean) => {
    setRadioValue(value);
  };

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
        <br />
        <br />
        <Progress percentage={-1} strokeHeight={30} />
        <br />
        <br />
        <Progress percentage={67} strokeHeight={30} />
        <br />
        <br />
        <Progress percentage={120} status="success" strokeHeight={30} />
        <br />
        <br />
        <Progress percentage={97} status="exception" strokeHeight={30} />

        <br />
        <br />
        <Progress percentage={-1} strokeHeight={20} textInside />
        <br />
        <br />
        <Progress percentage={67} strokeHeight={20} textInside />
        <br />
        <br />
        <Progress percentage={120} strokeHeight={20} status="success" textInside />
        <br />
        <br />
        <Progress percentage={97} strokeHeight={20} status="exception" textInside />

        <br />
        <br />
        <Progress percentage={-1} type="circle" strokeHeight={30} />
        <Progress percentage={20} type="circle" strokeHeight={60} circleWidth={300} />
        <Progress percentage={120} type="circle" status="success" />
        <Progress percentage={97} type="circle" status="exception" />
        <br />
        <br />
        <Loading text="Loading...">
          <p style={{ height: '100px' }}>test</p>
        </Loading>

        <div>
          <Button type="success" onClick={openSuccess}>Success</Button>
          <Button type="warning" onClick={openWarning}>Warning</Button>
          <Button type="info" onClick={openInfo}>Info</Button>
          <Button type="danger" onClick={openError}>Error</Button>
        </div>

        <div style={{ width: '550px', marginLeft: '100px', marginBottom: '20px' }}>
          <br />
          <br />
          <br />
          <br />
          <Collapse accordion>
            <CollapseItem name="1" title="Consistency">
              Consistent with real life: in line with the process and logic of real life,
              and comply with languages and habits that the users are used to;
              Consistent within interface: all elements should be consistent,
              such as: design style, icons and texts, position of elements, etc.

              Consistent within interface: all elements should be consistent,
              such as: design style, icons and texts, position of elements, etc.

              Consistent within interface: all elements should be consistent,
              such as: design style, icons and texts, position of elements, etc.
            </CollapseItem>
            <CollapseItem name="2" title="Feedback">
              Consistent with real life: in line with the process and logic of real life,
              and comply with languages and habits that the users are used to;
            </CollapseItem>
            <CollapseItem name="3" title="Efficiency">
              Consistent with real life: in line with the process and logic of real life,
              and comply with languages and habits that the users are used to;
              Consistent within interface: all elements should be consistent,
              such as: design style, icons and texts, position of elements, etc.
              Consistent with real life: in line with the process and logic of real life,
              and comply with languages and habits that the users are used to;
              Consistent within interface: all elements should be consistent,
              such as: design style, icons and texts, position of elements, etc.
            </CollapseItem>
            <CollapseItem name="4" title="Controllability">
              Consistent with real life: in line with the process and logic of real life,
              and comply with languages and habits that the users are used to;
              Consistent within interface: all elements should be consistent,
              such as: design style, icons and texts, position of elements, etc.
            </CollapseItem>
          </Collapse>
        </div>

        <div style={{ width: '550px', padding: '50px' }}>
          <RadioGroup onChange={onChangeRadio} value={radioValue}>
            <Radio value="1">Option A</Radio>
            <Radio value="2">Option B</Radio>
            <Radio value="3">Option C</Radio>
          </RadioGroup>
        </div>

        <div style={{ width: '550px', padding: '50px' }}>
          <RadioGroup size="small" onChange={onChangeRadio} value={radioValue}>
            <RadioButton value="Beijing">Beijing</RadioButton>
            <RadioButton value="Shanghai">Shanghai</RadioButton>
            <RadioButton value="Guangzhou">Guangzhou</RadioButton>
          </RadioGroup>
        </div>
      </header>
    </div>
  );
}

export default App;
