import React, { FC, ReactElement } from 'react';
import { RadioButtonSizeProps } from './RadioButton';

interface IRadioGroupProps {
  value?: string | number | boolean;
  children: ReactElement[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string | number | boolean) => void;

  size?: RadioButtonSizeProps;
  fill?: string;
  textColor?: string;
}

const RadioGroup: FC<IRadioGroupProps> = (props) => {
  const prefix = 'blocks-radio-group';
  const {
    value, children, onChange, size, fill, textColor
  } = props;

  const handleChange = (data: string | number | boolean) => {
    if (onChange) {
      onChange(data);
    }
  };

  const content = React.Children.map(children, (element) => {
    if (!element) {
      return null;
    }
    return React.cloneElement(
      element,
      {
        ...element.props, onChange: handleChange, selectedValue: value, size, fill, textColor
      }
    );
  });

  return (
    <div className={prefix}>
      {content}
    </div>
  );
};

export default RadioGroup;
