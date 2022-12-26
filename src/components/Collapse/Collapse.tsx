import React, {
  ReactElement, FC, useState,
} from 'react';

interface ICollapseProps {
  accordion?: boolean;
  value?: string[] | string;
  children: ReactElement[];
}

const Collapse: FC<ICollapseProps> = (props) => {
  const { accordion, value, children } = props;
  const prefix = 'blocks-collapse';
  const initialActiveItems = value ? ([] as string[]).concat(value) : [];
  const [activeItems, setActiveItems] = useState(initialActiveItems);

  const handleItemClick = (name: string) => {
    if (accordion) {
      const selectNames = activeItems[0] && activeItems[0] === name ? [] : [name];
      setActiveItems(selectNames);
    } else if (activeItems.includes(name)) {
      setActiveItems(activeItems.filter((item) => item !== name));
    } else {
      setActiveItems(activeItems.concat(name));
    }
  };
  const content = React.Children.map(children, (child: ReactElement, idx) => {
    const name = child.props.name || idx.toString();
    const key = name + idx.toString();
    return React.cloneElement(child, {
      isActive: activeItems.includes(name),
      name,
      key,
      onClick: (item: string) => handleItemClick(item),
    });
  });
  return (
    <div className={prefix}>
      {content}
    </div>
  );
};

Collapse.defaultProps = {
  accordion: false,
};

export default Collapse;
