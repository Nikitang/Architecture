import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import axios, { AxiosStatic } from 'axios';
import { NavigateFunction } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

// eslint-disable-next-line
export class TestAsyncThunk<T extends (...args: any[]) => any> {
    dispatch: jest.MockedFn<
        ThunkDispatch<StateSchema, ThunkExtraArg, UnknownAction>
    >;
    getState: () => StateSchema;
    actionCreator: T;
    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<NavigateFunction>;

    constructor(actionCreator: T, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Parameters<T>[0]) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });
        return result;
    }
}
