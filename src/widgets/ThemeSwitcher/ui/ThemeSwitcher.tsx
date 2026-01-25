import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import NormalThemeIcon from 'shared/assets/icons/theme-normal.svg';
import DarklThemeIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeComponent = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('themeSwitcher', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarklThemeIcon /> : <NormalThemeIcon />}
        </Button>
    );
};

const ThemeSwitcher = memo(ThemeComponent);

export default ThemeSwitcher;
