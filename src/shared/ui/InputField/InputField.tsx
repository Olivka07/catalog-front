import React, { FC, InputHTMLAttributes } from 'react';
import { cn } from 'shared/helpers/cn';
import css from './InputField.module.scss';
import { LangValue } from 'shared/languages/utils';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string | LangValue;
    name: string;
    readOnly?: boolean;
    disabled?: boolean;
    overflowElipsis?: boolean;
}
export const InputField: FC<InputFieldProps> = (props) => {
    const {
        label,
        name,
        className,
        readOnly = false,
        disabled = false,
        overflowElipsis = false,
        ...otherProps
    } = props;
    return (
        <div>
            {label && <label htmlFor={name}>{label.toString()}</label>}

            <input
                {...otherProps}
                name={name}
                id={name}
                readOnly={readOnly}
                disabled={disabled}
                className={cn(
                    css.input__field,
                    { [css.overflowElipsis]: overflowElipsis },
                    className
                )}
            />
        </div>
    );
};
