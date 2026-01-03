import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const refreshPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            <p>{t('unexpectedError')}</p>
            <Button
                onClick={refreshPage}
                theme={ThemeButton.OUTLINE}
                className={styles.btnError}
            >
                {t('refreshPage')}
            </Button>
        </div>
    );
};
