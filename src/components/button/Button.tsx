import React from "react";
import "./test.css";

export interface ButtonProps {
  label: string;
  disabled: boolean;
}

const Button = (props: ButtonProps) => {
  return <button className="test" disabled={props.disabled}>{props.label}</button>;
};

export default Button;