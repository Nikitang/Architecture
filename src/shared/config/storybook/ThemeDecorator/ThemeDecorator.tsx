/* eslint-disable react/display-name */
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Decorator } from '@storybook/react';

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (StoryComponent) =>
        (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
