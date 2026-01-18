import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onShowModal = () => {
        setIsAuthModal(true);
    };

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(styles.navbar, {}, [className])}>
                <Button
                    className={styles.links}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t('logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('login')}
            </Button>

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
