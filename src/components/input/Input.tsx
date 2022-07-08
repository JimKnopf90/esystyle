import React from "react";
import "./input.css";

export interface InputProps {
    /**
     * Set the placeholder for inputfield
     */
    placeholder: string;
    /**
     * Set the type of inputfield
     */
    type: 'text' | 'password' | 'checkbox';
    /**
     * Has the inputfield a border or only an underline?
     */
    style?: 'border' | 'non-border';
    /**
     * Can the inputfield be edited?
     */
    readonly: boolean;
    /**
     * Has the inputfield a value?
     */
    value?: string;
    /**
     * Set the inputfield disabled true or false
     */
    disabled: boolean;
}

const Input = ({
    type = 'text',
    placeholder = 'placeholder',
    style,
    readonly = false,
    value,
    disabled = false,
    ...props
} : InputProps) => {
    return (
        <input
            className={[
                'efy-input',
                `${style}-efy-input`
            ].join(' ')}
            type={type}
            placeholder={placeholder}
            readOnly={readonly}
            value={value}
            disabled={disabled}
            {...props}
        />
    );
};

export default Input;

