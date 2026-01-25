import React from 'react';

import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: Array<SidebarItemType> = [
    { path: RoutePath.main, text: 'ToMain', Icon: MainIcon },
    { path: RoutePath.about, text: 'AboutUs', Icon: AboutIcon },
    { path: RoutePath.profile, text: 'Profile', Icon: ProfileIcon },
];
