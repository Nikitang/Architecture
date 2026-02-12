import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileDataCity = (state: StateSchema) =>
    state.profile?.form?.city || '';
