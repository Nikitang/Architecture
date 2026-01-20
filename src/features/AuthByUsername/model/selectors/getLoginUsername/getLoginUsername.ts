import { RootState } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: RootState) =>
    state.loginForm?.username || '';
