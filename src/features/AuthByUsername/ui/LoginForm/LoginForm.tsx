import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const Login = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(styles.loginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && (
                    <Text
                        text={t('Incorrect user data')}
                        theme={TextTheme.ERROR}
                    />
                )}
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
        </DynamicModuleLoader>
    );
};

const LoginForm = memo(Login);

export default LoginForm;
