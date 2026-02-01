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
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const InputComponent = ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

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

    return (
        <div className={classNames(styles.inputWrapper, {}, [className])}>
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
                    {...otherProps}
                />
                {isFocused && (
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
