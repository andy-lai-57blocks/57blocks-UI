import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface ILoadingProps {
  fullscreen?: boolean;
  text?: string;
  loading?: boolean;
  children?: ReactNode;
}

const Loading: FC<ILoadingProps> = (props) => {
  const {
    fullscreen, text, loading, children
  } = props;
  const prefix = 'block-loading';

  if (fullscreen) {
    document.body?.style?.setProperty('overflow', 'hidden');
  } else {
    document.body?.style?.removeProperty('overflow');
  }

  return (
    <div className={classNames(prefix, { [`${prefix}--fullscreen`]: fullscreen })}>
      { loading && (
        <div className={`${prefix}__mask`}>
          <div className={`${prefix}__spinner`}>
            <svg viewBox="0 0 42 42" className={`${prefix}__circle`}>
              <circle r={20} cx={21} cy={21} fill="none" className={`${prefix}__path`} />
            </svg>
            { text && <p className={`${prefix}__text`}>{text}</p> }
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

Loading.defaultProps = {
  fullscreen: false,
  loading: true,
  text: ''
};

export default Loading;
