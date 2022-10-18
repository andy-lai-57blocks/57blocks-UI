import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/icon';

export type AlertTypeProps = 'success' | 'warning' | 'info' | 'error';

interface AlertProps {
  type?: AlertTypeProps;
  title: string;
  description?: string;
  closable?: boolean;
  closeText?: string;
  showIcon?: boolean;
}

interface IconMap {
  success: IconProp;
  warning: IconProp;
  info: IconProp;
  error: IconProp;
}

const iconMap: IconMap = {
  success: 'circle-check',
  warning: 'circle-exclamation',
  info: 'circle-info',
  error: 'circle-xmark',
};

const Alert: FC<AlertProps> = (props) => {
  const {
    title, description, type, closable, closeText, showIcon
  } = props;
  const [visible, setVisible] = useState(true);
  const classes = classNames('blocks-alert', type, { hidden: !visible });
  const closeAlert = () => {
    setVisible(false);
  };

  return (
    <div className={classes}>
      { showIcon && <Icon icon={iconMap[type!]} size={description ? '2xl' : 'sm'} theme="light" />}
      <div className="content">
        <span className="title">{title}</span>
        { description && <p className="description">{description}</p> }
        { closable
          && (
          <div className="close" onClick={closeAlert} aria-hidden="true">
            { closeText ? <span>{closeText}</span> : <Icon icon="xmark" theme="light" />}
          </div>
          )}
      </div>
    </div>
  );
};

Alert.defaultProps = {
  type: 'info',
  closable: true,
  showIcon: false,
};

export default Alert;
