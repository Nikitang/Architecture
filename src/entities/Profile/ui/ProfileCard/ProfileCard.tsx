import { useTranslation } from 'react-i18next';

import styles from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(styles.profileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('Profile')}></Text>
                <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    className={styles.input}
                    value={data?.firstName}
                    placeholder={t('Your name')}
                />
                <Input
                    className={styles.input}
                    value={data?.lastName}
                    placeholder={t('Your lastname')}
                />
            </div>
        </div>
    );
};
