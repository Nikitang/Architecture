import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileDataAge = (state: StateSchema) =>
    state.profile?.form?.age || 0;
