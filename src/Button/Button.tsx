import React from 'react';
import '../styles/Button.scss';

interface IButton {
  title: string;
  onClick: () => void;
  type?: "square" | "rounded";
  position?: "left" | "center" | "right";
  className?: string;
  style?: object;
  wider?: boolean;
}

export const Button = (props: IButton) => {
  const { type, className, position, wider, style  } = props;

  const getClasses = (): string => {
    let classes = 'button';

    if (type) classes += ` ${type}`;
    if (className) classes += ` ${className}`;
    if (position) classes += ` ${position}`;
    if (wider) classes += ` wide`;

    return classes;
  }

  const getStyle = (): object => {
    const stl = { color: '#fff', backgroundColor: '#c4c4c4', border: '1px solid #c4c4c4' };

    return style || stl;
  }

  return (
    <button
      onClick={props.onClick}
      style={getStyle()}
      className={getClasses()}
      type="button"
    >
      {props.title}
    </button>
  )
}