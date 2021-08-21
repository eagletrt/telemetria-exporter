import { ActionTree, ActionContext } from 'vuex'

import { Status } from '@/types'
import { orderDatabaseSchema } from '@/utils/orderDatabaseSchema'
import * as api from '@/utils/api';

import { State } from './state'
import { Mutations, MutationTypes } from './mutations'

export enum ActionTypes {
    SET_STATUS = 'SET_STATUS',
    FETCH_DATABASE_SCHEMA = 'FETCH_DATABASE_SCHEMA',
    SELECT_DATABASE = 'SELECT_DATABASE',
    ADD_COLLECTION = 'ADD_COLLECTION',
    REMOVE_COLLECTION = 'REMOVE_COLLECTION',
    EXPORT_JSON = 'EXPORT_JSON',
    EXPORT_CSV = 'EXPORT_CSV',
    BACK_TO_EDITING = 'BACK_TO_EDITING',
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.SET_STATUS]({ commit }: AugmentedActionContext, status: Status): void;
    [ActionTypes.FETCH_DATABASE_SCHEMA]({ commit, state, dispatch }: AugmentedActionContext): Promise<void>;
    [ActionTypes.SELECT_DATABASE]({ commit, state }: AugmentedActionContext, index: number): void;
    [ActionTypes.ADD_COLLECTION]({ commit, state }: AugmentedActionContext, payload: { db: string, collection: string }): void;
    [ActionTypes.REMOVE_COLLECTION]({ commit, state }: AugmentedActionContext, payload: { db: string, collection: string }): void;
    [ActionTypes.EXPORT_JSON]({ dispatch, state }: AugmentedActionContext): void;
    [ActionTypes.EXPORT_CSV]({ dispatch, state }: AugmentedActionContext): void;
    [ActionTypes.BACK_TO_EDITING]({ dispatch, state }: AugmentedActionContext): void;
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.SET_STATUS]({ commit }, status) {
        switch (status) {
            case Status.FETCHING:
                commit(MutationTypes.SET_MESSAGE, 'Fetching database schema');
                break;
            case Status.EXPORTING:
                commit(MutationTypes.SET_MESSAGE, 'Exporting selected collections');
                break;
            case Status.FETCHING_ERROR:
                commit(MutationTypes.SET_MESSAGE, 'Error in fetching database');
                break;
            case Status.EXPORTING_ERROR:
                commit(MutationTypes.SET_MESSAGE, 'Error in exporting collections');
                break;
            default:
                commit(MutationTypes.SET_MESSAGE, '');
                break;
        }
        commit(MutationTypes.SET_STATUS, status);
    },
    async [ActionTypes.FETCH_DATABASE_SCHEMA]({ commit, state, dispatch }) {
        if ([Status.NONE, Status.FETCHING_ERROR, Status.EXPORTING].includes(state.status)) {
            dispatch(ActionTypes.SET_STATUS, Status.FETCHING);
            try {
                const databaseSchema = await api.getDatabaseSchema();
                orderDatabaseSchema(databaseSchema);
                commit(MutationTypes.SET_DATABASE_SCHEMA, databaseSchema);
                dispatch(ActionTypes.SET_STATUS, Status.EDITING);
            } catch (error) {
                console.error('Error in fetching database', error);
                dispatch(ActionTypes.SET_STATUS, Status.FETCHING_ERROR);
            }
        }
    }
}