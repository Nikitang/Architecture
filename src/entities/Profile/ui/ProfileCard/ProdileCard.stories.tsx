import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/Ava.jpg';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'Admin',
            age: 22,
            country: Country.Russia,
            firstName: 'Nick',
            lastName: "I'am",
            city: 'Saint-Petersburg',
            currency: Currency.RUB,
            avatar: avatar,
        },
    },
};

export const Dark: Story = {
    args: {
        data: {
            username: 'Admin',
            age: 22,
            country: Country.Russia,
            firstName: 'Nick',
            lastName: "I'am",
            city: 'Saint-Petersburg',
            currency: Currency.RUB,
            avatar: avatar,
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    args: { error: 'Error' },
};

export const Loading: Story = {
    args: { isLoading: true },
};
