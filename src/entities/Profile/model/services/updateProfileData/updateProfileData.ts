import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const { api } = extra;

        const formData = getProfileForm(getState());

        try {
            const response = await api.patch<Profile>('/profile', formData);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue('error');
        }
    },
);
