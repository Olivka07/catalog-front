import React, {
    ChangeEvent,
    InputHTMLAttributes,
    useRef,
    useState
} from 'react';
import { LangValue } from 'shared/languages/utils';
import { SelectOption } from 'shared/types/select';
import { InputField } from '../InputField';
import './Select.scss';
import { Icon } from '../Icon';
import { cn } from 'shared/helpers';
import { useClickOutside, useRelativeModal } from 'shared/hooks';
import { RelativeModalContainer } from '../Modal/RelativeModal';
import { Typography } from '../Typography/Typography';

type SelectProps<Value extends SelectOption['value']> = {
    label?: string | LangValue;
    className?: string;
    options: SelectOption[];
    name: string;
    onChange: (name: string, value: Value) => void;
    inputPlacehoder?: string;
    value: Value;
};

export const Select = <Value extends SelectOption['value']>(
    props: SelectProps<Value>
) => {
    const {
        name,
        options,
        className,
        value,
        label,
        onChange,
        inputPlacehoder = 'Не выбрано'
    } = props;
    const selectContainerRef = useRef<HTMLDivElement>(null);
    const [isOpenedOptions, setIsOpenedOptions] = useState(false);
    const [inputValue, setInputValue] = useState(
        options.find((opt) => opt.value == value)?.label ?? ''
    );

    useClickOutside(selectContainerRef, () => {
        setIsOpenedOptions(false);
    });

    const handleSelectClick = () => {
        setIsOpenedOptions((prev) => !prev);
    };

    const handleOptionChange = (value: Value, option: SelectOption) => {
        onChange(name, value);
        setInputValue(option.label);
    };

    return (
        <RelativeModalContainer className={className}>
            <div
                ref={selectContainerRef}
                onClick={handleSelectClick}
                className={cn('select__container')}
            >
                {label && <label htmlFor={name}>{label.toString()}</label>}
                <InputField
                    overflowElipsis
                    name={`selectInput__${name}`}
                    value={inputValue}
                    title={inputValue}
                    placeholder={inputPlacehoder}
                    className="selectInput"
                    readOnly
                />
                <Icon
                    icon={isOpenedOptions ? 'chevronClose' : 'chevronOpen'}
                    className="selectSchevron"
                    size="medium"
                />
            </div>
            <OptionsList
                onOptionChange={handleOptionChange}
                isShown={isOpenedOptions}
                options={options}
                value={value}
            />
        </RelativeModalContainer>
    );
};

type OptionsListProps<T extends SelectOption['value']> = {
    isShown: boolean;
    options: SelectOption[];
    value: T;
    onOptionChange: (value: T, option: SelectOption) => void;
};

function OptionsList<T extends SelectOption['value']>(
    props: OptionsListProps<T>
) {
    const { isShown, options, value, onOptionChange } = props;

    const { relativeModalRef, translateDiff } = useRelativeModal({ isShown });

    const handleOptionClick = (value: T, option: SelectOption) => {
        onOptionChange(value, option);
    };

    return (
        <div
            style={{
                opacity: translateDiff[0] !== null ? 1 : 0,
                translate: `${translateDiff[0]}px ${translateDiff[1]}px`
            }}
            ref={relativeModalRef}
            className={cn('optionsModal', { optionsModal__closed: !isShown })}
        >
            {options.map((opt) => (
                <OptionsListItem
                    value={value}
                    option={opt}
                    key={opt.value}
                    onOptionClick={handleOptionClick}
                />
            ))}
        </div>
    );
}

type OptionsListItemProps<T extends SelectOption['value']> = {
    option: SelectOption;
    value: T;
    onOptionClick: (value: T, option: SelectOption) => void;
};
function OptionsListItem<T extends SelectOption['value']>(
    props: OptionsListItemProps<T>
) {
    const { option, value, onOptionClick } = props;

    const handleOptionClick = () => {
        onOptionClick(option.value as T, option);
    };

    return (
        <div
            data-value={option.value}
            aria-label={option.label}
            className={cn('option', {
                option__selected: option.value == value
            })}
            title={option.label}
            onClick={handleOptionClick}
        >
            <Typography.text className="optionText">
                {option.label}
            </Typography.text>
        </div>
    );
}
