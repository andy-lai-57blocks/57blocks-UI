import React, {
  ChangeEvent,
  FC, useState,
} from 'react';
import classNames from 'classnames';

interface ISwitchProps {
  disabled?: boolean;
  width?: number;
  onText?: string;
  offText?: string;
  onValue?: boolean | string | number;
  offValue?: boolean | string | number;
  onColor?: string;
  offColor?: string;
  name?: string;
  allowFocus?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: boolean | string | number) => void;
}

const Switch: FC<ISwitchProps> = (props) => {
  const prefix = 'blocks-switch';
  const {
    name,
    width,
    onText,
    offText,
    offValue,
    onColor,
    offColor,
    disabled,
    onValue,
    allowFocus,
    onChange,
  } = props;
  const [value, setValue] = useState(offValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = e.target.checked ? onValue : offValue;
    setValue(checkboxValue);
    if (onChange && checkboxValue) {
      onChange(checkboxValue);
    }
  };

  const getCoreWidth = () => {
    const defaultWidth = onText ? 58 : 46;
    let finalWidth = defaultWidth;
    if (width && width > defaultWidth) {
      finalWidth = width;
    }
    return finalWidth;
  };
  const getCoreColor = () => {
    const defaultColor = '#20a0ff';
    let finalColor = defaultColor;
    if (onColor && value === onValue) {
      finalColor = onColor;
    }
    if (offColor && value === offValue) {
      finalColor = offColor;
    }
    return finalColor;
  };

  const getCoreStyle = () => ({
    width: getCoreWidth(),
    borderColor: getCoreColor(),
    backgroundColor: getCoreColor(),
  });

  const getButtonPosition = () => {
    const coreWidth = getCoreWidth();
    const horizontalPosition = value === onValue ? coreWidth - 20 : 2;
    return {
      transform: `translate(${horizontalPosition}px, 2px)`,
    };
  };

  const getText = () => {
    if (onText || offText) {
      const style = onValue === value ? { left: '10px', right: 'unset' } : { right: '10px', left: 'unset' };
      return (<span style={style}>{value === onValue ? onText : offText}</span>);
    }
    return null;
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={prefix}>
      <input
        className={classNames(`${prefix}__checkbox`, {
          [`${prefix}__checkbox--focus`]: allowFocus,
        })}
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={value === onValue}
        onChange={handleChange}
      />
      <span className={`${prefix}__core`} style={getCoreStyle()}>
        <span className={`${prefix}__button`} style={getButtonPosition()} />
      </span>
      <div className={`${prefix}__text`} style={{ width: getCoreWidth() }}>
        {getText()}
      </div>
    </label>
  );
};
Switch.defaultProps = {
  disabled: false,
  onText: 'ON',
  offText: 'OFF',
  onValue: true,
  offValue: false,
  onColor: '#20A0FF',
  offColor: '#C0CCDA',
};

export default Switch;
