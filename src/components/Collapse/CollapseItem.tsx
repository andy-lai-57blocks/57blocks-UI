import classNames from 'classnames';
import React, { FC, ReactNode, useRef } from 'react';
import Icon from '../Icon/icon';

interface ICollapseItemProps {
  title: string;
  name: string;
  isActive?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (item: string) => void;
  children: ReactNode;
}

const CollapseItem: FC<ICollapseItemProps> = (props) => {
  const {
    title, name, isActive, onClick, children
  } = props;
  const prefix = 'blocks-collapse-item';
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (onClick) {
      onClick(name);
    }
  };
  contentRef?.current?.style.setProperty('--height', `${contentRef?.current?.scrollHeight}px`);
  return (
    <div className={classNames(prefix)}>
      <div className={classNames(`${prefix}__header`)} onClick={handleClick} aria-hidden="true">
        <Icon theme="dark" icon="angle-right" className={classNames(`${prefix}__icon`, { [`${prefix}__icon--active`]: isActive })} />
        {title}
      </div>
      <div ref={contentRef} className={classNames(`${prefix}__content`, { [`${prefix}__content--active`]: isActive })}>
        {children}
      </div>
    </div>
  );
};

CollapseItem.defaultProps = {
  isActive: false,
  onClick: () => {},
};

export default CollapseItem;
