/* eslint-disable react/display-name */
import { Theme } from 'app/providers/ThemeProvider';
import { Decorator } from '@storybook/react';

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (StoryComponent) =>
        (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        );
