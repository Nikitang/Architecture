import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                    className={styles.mainLink}
                >
                    {t('ToMain')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    {t('AboutUs')}
                </AppLink>
            </div>
        </div>
    );
};
