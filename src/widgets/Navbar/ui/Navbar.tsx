import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = () => {
        setIsAuthModal((prev) => !prev);
    };

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('login')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Lorem ipsum')}
            </Modal>
        </div>
    );
};
