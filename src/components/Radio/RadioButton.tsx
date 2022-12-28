import React, {
  FC, ReactNode, ChangeEvent, useState, useEffect
} from 'react';
import classNames from 'classnames';

export type RadioButtonSizeProps = 'large' | 'small';

interface IRadioButtonProps {
  checked?: boolean;
  value?: boolean | string | number;
  disabled?: boolean;
  children?: ReactNode;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: boolean | string | number) => void;
  selectedValue?: boolean | string | number;

  size?: RadioButtonSizeProps;
  fill?: string;
  textColor?: string;

}

const RadioButton: FC<IRadioButtonProps> = (props) => {
  const prefix = 'blocks-radio-button';
  const {
    checked: defaultChecked,
    value,
    disabled,
    children,
    onChange,
    selectedValue,
    size,
    fill,
    textColor,
  } = props;
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked && onChange && value) {
      onChange(value);
    }
    setChecked(isChecked);
  };
  const getCheckedValue = () => {
    if (selectedValue) {
      return selectedValue === value;
    }
    return defaultChecked;
  };

  useEffect(() => {
    setChecked(getCheckedValue());
  }, [defaultChecked, selectedValue]);

  const getStyle = () => {
    if (checked) {
      return {
        backgroundColor: fill || '',
        borderColor: fill || '',
        color: textColor || '',
      };
    }
    return {};
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classNames(
      prefix,
      { [`${prefix}--${size}`]: size },
      { [`${prefix}--checked`]: checked },
      { [`${prefix}--disabled`]: disabled }
    )}
    >
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        className={`${prefix}__original`}
        onChange={handleChange}
      />
      <span className={`${prefix}__inner`} style={getStyle()}>
        { children || value }
      </span>
    </label>
  );
};

export default RadioButton;
