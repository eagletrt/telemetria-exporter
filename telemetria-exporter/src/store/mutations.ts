import { MutationTree } from 'vuex'

import { DatabaseSchema, Status } from '@/types';
import { State } from './state'

export enum MutationTypes {
    SET_DATABASE_SCHEMA = 'SET_DATABASE_SCHEMA',
    SET_CURRENT_DATABASE_INDEX = 'SET_CURRENT_DATABASE_INDEX',
    SET_SELECTED_ITEMS = 'SET_SELECTED_ITEMS',
    SET_LOADING = 'SET_LOADING',
    SET_MESSAGE = 'SET_MESSAGE',
    SET_STATUS = 'SET_STATUS'
}

export interface Mutations<S = State> {
    [MutationTypes.SET_DATABASE_SCHEMA](state: S, databaseSchema: DatabaseSchema): void;
    [MutationTypes.SET_CURRENT_DATABASE_INDEX](state: S, currentDatabaseIndex: number): void;
    [MutationTypes.SET_SELECTED_ITEMS](state: S, selectedItems: DatabaseSchema): void;
    [MutationTypes.SET_LOADING](state: S, loading: boolean): void;
    [MutationTypes.SET_MESSAGE](state: S, message: string): void;
    [MutationTypes.SET_STATUS](state: S, status: Status): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_DATABASE_SCHEMA](state, databaseSchema) {
        state.databaseSchema = databaseSchema;
        state.currentDatabaseIndex = -1;
        state.selectedItems = {};
    },
    [MutationTypes.SET_CURRENT_DATABASE_INDEX](state, currentDatabaseIndex) {
        state.currentDatabaseIndex = currentDatabaseIndex;
    },
    [MutationTypes.SET_SELECTED_ITEMS](state, selectedItems) {
        state.selectedItems = selectedItems;
    },
    [MutationTypes.SET_LOADING](state, loading) {
        state.loading = loading;
    },
    [MutationTypes.SET_MESSAGE](state, message) {
        state.message = message;
    },
    [MutationTypes.SET_STATUS](state, status) {
        state.status = status;
    }
}