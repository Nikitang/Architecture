import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...otherProps
}: ButtonProps) => {
    return (
        <button
            className={classNames(styles.button, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
