import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Input
                autoFocus
                type="text"
                className={styles.input}
                placeholder={t('enterUsername')}
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t('enterPassword')}
            />
            <Button className={styles.loginBtn}>{t('login')}</Button>
        </div>
    );
};
