import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currencySchema';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const CURRENCY_OPTIONS = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USE, content: Currency.USE },
];

const CurrencySelectComponent = ({
    className,
    value,
    onChange,
    readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Indicate currency')}
            options={CURRENCY_OPTIONS}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};

export const CurrencySelect = memo(CurrencySelectComponent);
