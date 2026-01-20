import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
    children,
    reducers,
    removeAfterUnmount,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducerListEntry) => {
                store.reducerManager.add(name, reducer);

                //dispatch for - check of async reducers
                dispatch({ type: `@INIT ${name} REDUCER` });
            },
        );

        return () => {
            Object.entries(reducers).forEach(
                ([name, reducer]: ReducerListEntry) => {
                    if (removeAfterUnmount) {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} REDUCER` });
                    }
                },
            );
        };
    }, []);
    return <>{children}</>;
};
