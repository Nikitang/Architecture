import styles from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
}: TextProps) => {
    return (
        <div
            className={classNames(styles.text, { [styles[theme]]: true }, [
                className,
            ])}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};
