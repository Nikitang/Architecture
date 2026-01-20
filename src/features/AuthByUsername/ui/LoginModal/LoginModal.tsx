import { Modal } from 'shared/ui/Modal/Modal';
import styles from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { PageLoader } from 'widgets/PageLoader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            className={classNames(styles.loginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<PageLoader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
