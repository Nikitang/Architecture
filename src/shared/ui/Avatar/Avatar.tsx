import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
    const avatarStyles = useMemo<CSSProperties>(() => {
        return { width: size, height: size };
    }, [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={avatarStyles}
            className={classNames(styles.avatar, {}, [className])}
        />
    );
};
