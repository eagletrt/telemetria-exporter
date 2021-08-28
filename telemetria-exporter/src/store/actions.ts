import { ActionTree, ActionContext } from 'vuex'

import { Status } from '@/types'
import { orderDatabaseSchema } from '@/utils/orderDatabaseSchema'
import * as api from '@/utils/api';

import { State } from './state'
import { Mutations, MutationTypes } from './mutations'
import { downloadFile } from '@/utils/download';

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
    [ActionTypes.EXPORT_JSON]({ dispatch, state }: AugmentedActionContext): Promise<void>;
    [ActionTypes.EXPORT_CSV]({ dispatch, state }: AugmentedActionContext): Promise<void>;
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
    },
    [ActionTypes.SELECT_DATABASE]({ commit, state }, index) {
        if (state.status === Status.EDITING) {
            commit(MutationTypes.SET_CURRENT_DATABASE_INDEX, index);
        }
    },
    [ActionTypes.ADD_COLLECTION]({ commit, state }, payload) {
        if (state.status === Status.EDITING) {
            const selectedItems = { ...state.selectedItems };
            if (selectedItems[payload.db]) {
                selectedItems[payload.db].push(payload.collection);
            } else {
                selectedItems[payload.db] = [payload.collection];
            }
            commit(MutationTypes.SET_SELECTED_ITEMS, selectedItems);
        }
    },
    [ActionTypes.REMOVE_COLLECTION]({ commit, state }, payload) {
        if (state.status === Status.EDITING) {
            const selectedItems = { ...state.selectedItems };
            const index = selectedItems[payload.db].indexOf(payload.collection);
            selectedItems[payload.db].splice(index, 1);
            if (!selectedItems[payload.db].length) {
                delete selectedItems[payload.db];
            }
            commit(MutationTypes.SET_SELECTED_ITEMS, selectedItems);
        }
    },
    async [ActionTypes.EXPORT_JSON]({ dispatch, state }) {
        if (state.status === Status.EDITING) {
            dispatch(ActionTypes.SET_STATUS, Status.EXPORTING);
            try {
                const data = await api.exportJson(state.selectedItems);
                downloadFile(data);
                dispatch(ActionTypes.FETCH_DATABASE_SCHEMA);
            } catch (error) {
                console.error('Error in exporting collections as json', error);
                dispatch(ActionTypes.SET_STATUS, Status.EXPORTING_ERROR);
            }
        }
    },
    async [ActionTypes.EXPORT_CSV]({ dispatch, state }) {
        if (state.status === Status.EDITING) {
            dispatch(ActionTypes.SET_STATUS, Status.EXPORTING);
            try {
                const data = await api.exportCsv(state.selectedItems);
                downloadFile(data);
                dispatch(ActionTypes.FETCH_DATABASE_SCHEMA);
            } catch (error) {
                console.error('Error in exporting collections as csv', error);
                dispatch(ActionTypes.SET_STATUS, Status.EXPORTING_ERROR);
            }
        }
    },
    [ActionTypes.BACK_TO_EDITING]({ dispatch, state }) {
        if (state.status === Status.EXPORTING || state.status === Status.EXPORTING_ERROR) {
            dispatch(ActionTypes.SET_STATUS, Status.EDITING);
        }
    }
}