import React, { ChangeEvent } from 'react';
import './checkbox.scss';
import { cn } from 'shared/helpers';

type CheckboxValue = string | number | string[];

export type ChangeCheckboxEventHandler<T extends CheckboxValue = undefined> = (
    name: string,
    value: boolean,
    realValue: T
) => void;

type CheckboxProps<T extends CheckboxValue> = {
    name: string;
    value: boolean;
    label: string;
    onChange: ChangeCheckboxEventHandler<T>;
    realValue?: T;
    className?: string;
};

export const Checkbox = <T extends string | number | string[]>(
    props: CheckboxProps<T>
) => {
    const {
        name,
        onChange,
        value,
        label,
        realValue = undefined,
        className
    } = props;

    const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        const candidateValue = checked ? realValue : null;

        onChange(name, checked, candidateValue);
    };

    return (
        <div className={cn(className, 'checkbox__container')}>
            <label
                className="checkbox__label"
                htmlFor={name}
                aria-labelledby={name}
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                type="checkbox"
                checked={value}
                value={realValue}
                onChange={handleChangeCheckbox}
                aria-hidden
                className="checkbox"
            />
            <span
                className={cn('checkbox__input', {
                    checkbox__input_checked: value
                })}
            ></span>
        </div>
    );
};
