import { RootState } from 'app/providers/StoreProvider';

export const getLoginError = (state: RootState) => state.loginForm?.error;
