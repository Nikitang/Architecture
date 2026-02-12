import { useTranslation } from 'react-i18next';

import styles from './ProfilePageHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(styles.profilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly ? (
                <Button
                    onClick={onEdit}
                    className={styles.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Edit')}
                </Button>
            ) : (
                <>
                    <Button
                        onClick={onCancelEdit}
                        className={styles.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                    >
                        {t('Cancel')}
                    </Button>
                    <Button
                        onClick={onSaveEdit}
                        className={styles.saveBtn}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t('Save')}
                    </Button>
                </>
            )}
        </div>
    );
};
