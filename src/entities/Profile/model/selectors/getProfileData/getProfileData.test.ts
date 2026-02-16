import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'Admin',
            age: 22,
            country: Country.Russia,
            firstName: 'Nick',
            lastName: "I'am",
            city: 'Saint-Petersburg',
            currency: Currency.RUB,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
