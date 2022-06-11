import React from "react";

export interface ButtonProps {
  label: string;
  disabled: boolean;
}

const Button = (props: ButtonProps) => {
  return <button disabled={props.disabled}>{props.label}</button>;
};

export default Button;