import React, { FC, ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import Icon from '../Icon/icon';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
export type ButtonNativeType = 'button' | 'reset' | 'submit';
export type ButtonSize = 'large' | 'small' | 'mini';

interface IButtonProps {
  type?: ButtonType;
  size?: string;
  plain?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: IconProp;
  nativeType?: ButtonNativeType;
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<IButtonProps> = (props) => {
  const {
    type, size, plain, loading, disabled, icon, nativeType, onClick, children
  } = props;
  const prefix = 'blocks-button';
  const classes = classNames(prefix, {
    [`${prefix}--${type}`]: type,
    [`${prefix}--${size}`]: size,
    [`${prefix}--loading`]: loading,
    [`${prefix}--disabled`]: disabled,
    [`${prefix}--plain`]: plain
  });
  const getSpinnerTheme = () => {
    switch (type) {
      case 'text':
        return 'primary';
      case undefined:
        return 'dark';
      default:
        return 'light';
    }
  };
  return (
    <button type={nativeType} onClick={onClick} className={classes}>
      { loading
        && <Icon icon="spinner" className={`${prefix}__spinner`} theme={getSpinnerTheme()} />}
      { icon && !loading
        && <Icon icon={icon} theme="light" />}
      {children && <span>{children}</span>}
    </button>
  );
};

Button.defaultProps = {
  plain: false,
  loading: false,
  disabled: false,
  nativeType: 'button',
};

export default Button;
