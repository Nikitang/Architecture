import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<Array<ValidateProfileError>>
>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const { api } = extra;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await api.patch<Profile>('/profile', formData);
            if (!response.data) throw new Error('Error');
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
