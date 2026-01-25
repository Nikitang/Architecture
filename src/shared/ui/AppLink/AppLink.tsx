import styles from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

const AppLinkComponent = ({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}: AppLinkProps) => {
    return (
        <Link
            to={to}
            className={classNames(styles.appLink, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

const AppLink = memo(AppLinkComponent);

export default AppLink;
