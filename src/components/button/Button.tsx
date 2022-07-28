import React from "react";
import "./button.css";

export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    color?: string;
    backgroundColor?: string;
    buttonSize: 'small' | 'medium' | 'large' | 'full-width'
    buttonFunction: 'default' | 'submit' | 'delete' | 'close' | 'edit' | 'login';
    onClick?: () => string;
    children: string;
}

const Button = ({
    variant = 'primary',
    disabled,
    backgroundColor,
    color,
    buttonFunction = 'default',
    buttonSize = 'small',
    onClick,
    children,
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
          {children}
      </button>);
};

export default Button;