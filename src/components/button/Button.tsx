import React from "react";
import "./button.css";

export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    label: string;
    disabled?: boolean;
    color?: string;
    backgroundColor?: string;
    buttonSize: 'small' | 'medium' | 'large' | 'full-width'
    buttonFunction: 'default' | 'submit' | 'delete' | 'close' | 'edit';
    onClick?: () => string;
}

const Button = ({
    variant = 'primary',
    disabled,
    backgroundColor,
    label,
    color,
    buttonFunction = 'default',
    buttonSize = 'small',
    onClick,
    ...props
} : ButtonProps) => {

  return (
      <button
          className={[
              'button',
              `${buttonFunction}-button-${variant}`,
              `default-button-${buttonSize}`].join(' ')
          }
          onClick={onClick}
          disabled={disabled}
          style={{
              backgroundColor,
              color,
          }}
          {...props}
      >
          {label}
      </button>);
};

export default Button;