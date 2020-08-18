import React, { useState } from 'react';
import { isExist } from '../../utilities/common';

const Input = React.memo(({ placeholder, value,  type, className, onChange, error, onFocus, onBlur, isHalf, autocapitalize }) => {
  const [focused, setFocus] = useState(false);

  const getStyle = () => {
    let style = 'input-container';

    if (focused) {
      style += ' focused';
    }

    if (value !== '') {
      style += ' not-empty';
    }

    if (isExist(className)) {
      style += ` ${className}`;
    }

    return style;
  }

  const getError = () => {
    if (isExist(error)) {
      return (
        <div className="input-error">
          {error}
        </div>
      )
    }
  }

  const blur = () => {
    setFocus(false)

    if (onBlur) {
      onBlur();
    }
  }

  const focus = () => {
    setFocus(true);

    if (onFocus) {
      onFocus();
    }
  }

  return ( 
    <div className={isHalf ? 'half-input-outer' : 'full-input-outer'}>
      <div className={getStyle()}>
        <label className="input-placeholder">
          {placeholder}
        </label>

        <input
          className="input"
          value={value}
          onFocus={onFocus}
          onChange={(ev) => onChange(ev.target.value)}
          onBlur={() => blur()}
          onFocus={() => focus()}
          type={type}
        />
      </div>
      
      {getError()}
    </div>
  )
});

export default Input;