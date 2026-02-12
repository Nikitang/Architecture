import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'List',
    },
};

export const Dark: Story = {
    args: {
        label: 'List',
    },

    decorators: [ThemeDecorator(Theme.DARK)],
};
