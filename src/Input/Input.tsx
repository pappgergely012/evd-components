import React, { useState, useEffect } from "react";
import '../styles/Input.scss';

export interface IInput {
  placeholder: string;
  value: string;
  isHalf?: boolean;
  className?: string;
  error?: string;
  type?: string;
  activeColor?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange: (val: string) => void;
}

export interface IState {
  focused: boolean;
}

export const Input = (props: IInput) => {
  const [focused, setFocus] = useState<IState['focused']>(false);
  const { value, className, error, onBlur, onFocus, onChange, type, isHalf, placeholder, activeColor } = props;

  const getStyle = (): string => {
    let style = 'input-container';

    if (focused) {
      style += ' focused';
    }

    if (value !== '') {
      style += ' not-empty';
    }

    if (className) {
      style += ` ${className}`;
    }

    return style;
  }

  const getError = () => {
    if (error) {
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
        <label className="input-placeholder" style={activeColor && focused ? {color: activeColor} : undefined }>
          {placeholder}
        </label>

        <input
          className="input"
          value={value}
          style={activeColor && focused ? {boxShadow: `0 4px 4px rgba(${activeColor}, .4)`, borderColor: activeColor} : undefined }
          onChange={(ev) => onChange(ev.target.value)}
          onBlur={() => blur()}
          onFocus={() => focus()}
          type={type}
        />
      </div>
      
      {getError()}
    </div>
  )
};