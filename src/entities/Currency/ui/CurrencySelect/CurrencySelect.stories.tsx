import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
