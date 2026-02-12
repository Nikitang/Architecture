import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './Select.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: Array<SelectOption>;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const SelectComponent = ({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                isOpen &&
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    const displayValue = useMemo(() => {
        const selected = options?.find((opt) => opt.value === value);
        return selected?.content || options?.[0]?.content || '';
    }, [options, value]);

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <li
                key={opt.value}
                className={styles.option}
                onClick={() => {
                    onChange?.(opt.value);
                    setIsOpen(false);
                }}
            >
                {opt?.content}
            </li>
        ));
    }, [onChange, options]);

    const controlStateSelect = useCallback(() => {
        if (!readonly) setIsOpen(!isOpen);
    }, [setIsOpen, readonly, isOpen]);

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    return (
        <div
            ref={wrapperRef}
            className={classNames(styles.wrapper, mods, [className])}
        >
            {label && <span className={styles.label}>{`${label}>`}</span>}

            <div
                className={classNames(styles.customSelect, mods, [])}
                onClick={controlStateSelect}
            >
                <span>{displayValue}</span>
                <div className={isOpen ? styles.rotateDeg : styles.rotate}>
                    {'▼'}
                </div>
            </div>

            {isOpen && <ul className={styles.options}>{optionsList}</ul>}
        </div>
    );
};

export const Select = memo(SelectComponent);
