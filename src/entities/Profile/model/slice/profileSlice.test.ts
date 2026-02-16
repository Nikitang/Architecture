import { Country } from 'entities/Country';
import { ProfileSchema, ValidateProfileError } from '../types/profileSchema';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'Admin',
    age: 22,
    country: Country.Russia,
    firstName: 'Nick',
    lastName: "I'am",
    city: 'Saint-Petersburg',
    currency: Currency.RUB,
};

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: 'aaa' }),
            ),
        ).toEqual({
            form: { username: 'aaa' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending('mock'),
            ),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, 'mock'),
            ),
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
