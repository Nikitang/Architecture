import { useTranslation } from 'react-i18next';

import styles from './ProfileCard.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profileSchema';
import { PageLoader } from 'widgets/PageLoader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={classNames(
                    styles.profileCard,
                    { [styles.lodaing]: true },
                    [className],
                )}
            >
                <PageLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(styles.profileCard, {}, [
                    className,
                    styles.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Profile loading error')}
                    text={t('Try to refresh page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [styles.editing]: !readonly,
    };

    return (
        <div className={classNames(styles.profileCard, mods, [className])}>
            <div className={styles.data}>
                {data?.avatar && (
                    <div className={styles.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    className={styles.input}
                    value={data?.firstName}
                    placeholder={t('Your name')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />

                <Input
                    className={styles.input}
                    value={data?.lastName}
                    placeholder={t('Your lastname')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />

                <Input
                    className={styles.input}
                    value={data?.age}
                    placeholder={t('Your age')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />

                <Input
                    className={styles.input}
                    value={data?.city}
                    placeholder={t('City')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <Input
                    className={styles.input}
                    value={data?.username}
                    placeholder={t('Username')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />

                <Input
                    className={styles.input}
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />

                <CurrencySelect
                    className={styles.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    className={styles.countryInput}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
