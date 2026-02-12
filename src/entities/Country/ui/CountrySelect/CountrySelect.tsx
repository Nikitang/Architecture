import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/countrySchema';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const CURRENCY_OPTIONS = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Balarus, content: Country.Balarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Armenia, content: Country.Armenia },
];

const CountrySelectComponent = ({
    className,
    value,
    onChange,
    readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Indicate country')}
            options={CURRENCY_OPTIONS}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};

export const CountrySelect = memo(CountrySelectComponent);
