import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
    const { api } = extra;
    try {
        const response = await api.get<Profile>('/profile');

        if (!response.data) throw new Error('Error');

        return response.data;
    } catch (error) {
        console.error(error);
        return rejectWithValue('error');
    }
});
