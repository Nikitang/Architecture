import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileDataFirstname = (state: StateSchema) =>
    state.profile?.form?.firstName || '';
