import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
    args: {
        title: 'Title',
    },
};

export const TextC: Story = {
    args: {
        text: 'Text',
    },
};

export const AllText: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const AllTextDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

AllTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};
