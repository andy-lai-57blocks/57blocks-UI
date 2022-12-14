import * as React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...resetProps } = props;
  const classes = classNames(className, { [`blocks-icon--${theme}`]: theme });
  return (
    <FontAwesomeIcon className={classes} {...resetProps} />
  );
};

export default Icon;
