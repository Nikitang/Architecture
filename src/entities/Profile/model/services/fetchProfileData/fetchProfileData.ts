import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Profile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
    const { api } = extra;
    try {
        const response = await api.get<Profile>('/profile');

        return response.data;
    } catch (error) {
        console.error(error);
        return rejectWithValue('error');
    }
});
