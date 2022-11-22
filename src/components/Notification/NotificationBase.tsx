import React, {
  FC, ReactNode, useRef, useState, useEffect
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon, { ThemeProps } from '../Icon/icon';

export const prefix = 'blocks-notification';
export type NotificationBaseTypeProps = 'success' | 'warning' | 'info' | 'error';

export interface INotificationBaseProps {
  title?: string;
  message?: string | ReactNode;
  type?: NotificationBaseTypeProps;
  duration?: number;
  top?: number;
  onClick?: () => void;
  onClose?: () => void;
  willUnmount?: () => void;
}
interface IconMap {
  success: IconProp;
  warning: IconProp;
  info: IconProp;
  error: IconProp;
}

const iconMap:IconMap = {
  success: 'circle-check',
  warning: 'circle-exclamation',
  info: 'circle-info',
  error: 'circle-xmark',
};

interface IThemeMap {
  success: ThemeProps;
  warning: ThemeProps;
  info: ThemeProps;
  error: ThemeProps;
}

const themeMap: IThemeMap = {
  success: 'success',
  warning: 'warning',
  info: 'info',
  error: 'danger',
};

const NotificationBase: FC<INotificationBaseProps> = (props) => {
  const {
    title, message, type, duration, top, onClick, onClose, willUnmount,
  } = props;
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(true);
  let timerId:any;

  const closeNotification = () => {
    setVisible(false);
  };

  const startTimer = () => {
    if (duration) {
      timerId = setTimeout(() => setVisible(false), duration);
    }
  };

  const stopTimer = () => {
    clearTimeout(timerId);
  };

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={visible}
      timeout={300}
      classNames={prefix}
      onExit={willUnmount}
      onExited={onClose}
      unmountOnExit
      appear
    >
      <div
        className={prefix}
        ref={nodeRef}
        onClick={onClick}
        onMouseLeave={startTimer}
        onMouseEnter={stopTimer}
        style={{
          top,
        }}
        aria-hidden="true"
      >
        { type && <Icon icon={iconMap[type]} theme={themeMap[type]} className={`${prefix}__icon`} />}
        <div className={`${prefix}__content`}>
          <div className={`${prefix}__title`}>{title}</div>
          <div className={`${prefix}__message`}>{message}</div>
        </div>
        <Icon icon="xmark" theme="secondary" className={`${prefix}__close`} onClick={closeNotification} />
      </div>
    </CSSTransition>
  );
};

NotificationBase.defaultProps = {
  duration: 4500,
  top: 20,
};

export default NotificationBase;
