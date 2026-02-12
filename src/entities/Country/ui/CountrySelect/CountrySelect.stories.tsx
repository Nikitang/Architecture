import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
