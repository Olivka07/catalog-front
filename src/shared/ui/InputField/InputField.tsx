import React, { FC, InputHTMLAttributes } from 'react';
import { cn } from 'shared/helpers/cn';
import { LangValue } from 'shared/languages/utils';
import './InputField.scss';

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
                    'input__field',
                    { overflowElipsis: overflowElipsis },
                    className
                )}
            />
        </div>
    );
};
