import { ChangeCheckboxEventHandler, Checkbox, Icon } from 'shared/ui';
import css from './FiltersSidebar.module.scss';
import { filters } from 'widgets/sidebar/model/constants';
import { useUnit } from 'effector-react';
import { catalogIndicators } from 'features/catalog/model/filters-model/indicators';
import { cn } from 'shared/helpers';

type FilterItemProps = {
    filter: (typeof filters)[number];
};

export const FilterItem = (props: FilterItemProps) => {
    const { filter } = props;
    const { label, name } = filter;
    const { indicators, updateIndicators } = useUnit(catalogIndicators);

    const handleIndicatorCheckboxChange: ChangeCheckboxEventHandler = (
        name,
        value
    ) => {
        updateIndicators({ [name]: value });
    };

    const handleIconClick = () => {
        updateIndicators({ [name]: !indicators[name] });
    };

    return (
        <li className={css.item__container}>
            <div
                className={cn(css.item__icon, {
                    [css.item__icon_checked]: indicators[name]
                })}
                onClick={handleIconClick}
            >
                <Icon icon={name} size="large" />
            </div>
            <Checkbox
                name={name}
                onChange={handleIndicatorCheckboxChange}
                value={indicators[name]}
                label={label}
            />
        </li>
    );
};
