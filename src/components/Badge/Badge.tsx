import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

export type BadgeType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

interface IBadgeProps {
  value?: string | number;
  max?: number;
  isDot?: boolean;
  type?: BadgeType;
  children?: ReactNode;
}

const Badge: FC<IBadgeProps> = (props) => {
  const {
    value, max, isDot, type, children
  } = props;
  const prefix = 'block-badge';
  const classes = classNames(`${prefix}__sup`, {
    [`${prefix}__sup--fixed`]: true,
    [`${prefix}__sup--dot`]: isDot,
    [`${prefix}__sup--${type}`]: type,
  });
  const getSupContent = () => {
    if (!value || isDot) {
      return '';
    }
    if ((value as number) > (max as number)) {
      return `${max}+`;
    }
    return value;
  };
  return (
    <div className={prefix}>
      {children}
      <sup className={classes}>{getSupContent()}</sup>
    </div>
  );
};

Badge.defaultProps = {
  isDot: false,
  type: 'danger',
};

export default Badge;
