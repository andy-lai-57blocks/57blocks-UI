import React, {
  FC, ReactNode, useState, useEffect, ChangeEvent
} from 'react';
import classNames from 'classnames';

interface IRadioProps {
  checked?: boolean;
  value?: boolean | string | number;
  disabled?: boolean;
  children?: ReactNode;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: boolean | string | number) => void;
  selectedValue?: boolean | string | number;
}

const Radio: FC<IRadioProps> = (props) => {
  const prefix = 'blocks-radio';

  const {
    checked: defaultChecked, value, disabled, children, onChange, selectedValue
  } = props;
  const [focus, setFocus] = useState(false);
  const [checked, setChecked] = useState(defaultChecked);

  const getCheckedValue = () => {
    if (selectedValue) {
      return selectedValue === value;
    }
    return defaultChecked;
  };

  useEffect(() => {
    setChecked(getCheckedValue());
  }, [defaultChecked, selectedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked && onChange && value) {
      onChange(value);
    }
    setChecked(isChecked);
  };
  const handleBlur = () => {
    setFocus(false);
  };
  const handleFocus = () => {
    setFocus(true);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={prefix}>
      <span className={classNames(
        `${prefix}__input`,
        { [`${prefix}__input--focus`]: focus },
        { [`${prefix}__input--checked`]: checked },
        { [`${prefix}__input--disabled`]: disabled }
      )}
      >
        <span className={`${prefix}__inner`} />
        <input
          type="radio"
          className={`${prefix}__original`}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </span>
      <span className={`${prefix}__label`}>
        {children || value}
      </span>
    </label>
  );
};

Radio.defaultProps = {
  checked: false,
};

export default Radio;
