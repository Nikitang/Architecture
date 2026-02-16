import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profileSchema';

const data = {
    username: 'Admin',
    age: 22,
    country: Country.Russia,
    firstName: 'Nick',
    lastName: "I'am",
    city: 'Saint-Petersburg',
    currency: Currency.RUB,
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.patch.mockReturnValue(Promise.resolve({ data: data }));
        const result = await thunk.callThunk(undefined);

        expect(thunk.api.patch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('reject login', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.patch.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(undefined);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: { ...data, firstName: '' } },
        });
        const result = await thunk.callThunk(undefined);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
