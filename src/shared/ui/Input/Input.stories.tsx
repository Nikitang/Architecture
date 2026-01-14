import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Text',
        value: 'Template',
    },
};

export const Dark: Story = {
    args: {
        placeholder: 'Text',
        value: 'Template',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
