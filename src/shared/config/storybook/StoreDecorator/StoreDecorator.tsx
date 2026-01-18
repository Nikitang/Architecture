import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/utils/DeepPartial/DeepPartial';
import { Decorator } from '@storybook/react';

export const StoreDecorator =
    (state: DeepPartial<StateSchema>): Decorator =>
    (StoryComponent) => (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    );
