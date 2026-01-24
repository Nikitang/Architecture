import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/utils/DeepPartial/DeepPartial';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginError.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Name',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('Name');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
