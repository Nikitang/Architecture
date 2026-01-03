import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
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
