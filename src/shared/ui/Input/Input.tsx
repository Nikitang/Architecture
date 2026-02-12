import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useState,
    FocusEvent,
    useEffect,
    useRef,
} from 'react';
import styles from './Input.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const InputComponent = ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const isCaretVivsible = isFocused && !readonly;

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: FocusEvent<HTMLInputElement>) => {
        setCaretPosition(e.target.selectionStart || 0);
    };

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    return (
        <div className={classNames(styles.inputWrapper, mods, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>{`${placeholder}>`}</div>
            )}

            <div className={styles.caretWrapper}>
                <input
                    className={styles.input}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVivsible && (
                    <span
                        className={styles.caret}
                        style={{ left: `${caretPosition * 8}px` }}
                    ></span>
                )}
            </div>
        </div>
    );
};

export const Input = memo(InputComponent);
