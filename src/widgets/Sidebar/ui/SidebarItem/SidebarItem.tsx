import { useTranslation } from 'react-i18next';

import styles from './SidebarItem.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItemComponent = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const { path, text, Icon } = item;

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={path}
            className={classNames(styles.item, {
                [styles.collapsed]: collapsed,
            })}
        >
            <Icon className={styles.icon} />

            <span className={styles.link}> {t(text)}</span>
        </AppLink>
    );
};

export const SidebarItem = memo(SidebarItemComponent);
