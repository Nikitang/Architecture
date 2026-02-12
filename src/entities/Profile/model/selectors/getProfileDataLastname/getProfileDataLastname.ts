import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileDataLastname = (state: StateSchema) =>
    state.profile?.form?.lastName || '';
