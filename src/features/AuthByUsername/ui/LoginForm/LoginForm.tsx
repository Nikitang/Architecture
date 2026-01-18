import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

const Login = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onClickLogic = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                className={styles.input}
                type="text"
                placeholder={t('enterUsername')}
                onChange={onChangeUsername}
                value={username}
                autoFocus
            />
            <Input
                className={styles.input}
                type="text"
                placeholder={t('enterPassword')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={styles.loginBtn}
                onClick={onClickLogic}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
            >
                {t('login')}
            </Button>
        </div>
    );
};

export const LoginForm = memo(Login);
