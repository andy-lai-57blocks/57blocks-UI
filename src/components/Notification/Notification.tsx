/* eslint-disable no-param-reassign */
import React from 'react';
import ReactDOM from 'react-dom';
import NotificationBase, { INotificationBaseProps, NotificationBaseTypeProps, prefix } from './NotificationBase';

const notificationClassName = `.${prefix}`;

const Notification = (props: INotificationBaseProps, type?: NotificationBaseTypeProps) => {
  if (type) {
    props.type = type;
  }
  if (!props.top) {
    props.top = 0;
  }
  const instances = document.querySelectorAll(notificationClassName);
  const lastInstance = instances[instances.length - 1] as HTMLElement;
  // eslint-disable-next-line max-len
  props.top = (lastInstance ? parseInt(lastInstance.style.top, 10) + lastInstance.offsetHeight : props.top) + 16;

  const div = document.createElement('div');
  document.body.appendChild(div);

  const willUnmount = () => {
    setTimeout(() => document.body.removeChild(div));
  };
  const element = React.createElement(NotificationBase, { ...props, willUnmount });
  ReactDOM.render(element, div);
};

export default Notification;
