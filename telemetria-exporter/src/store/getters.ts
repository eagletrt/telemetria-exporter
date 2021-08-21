import { GetterTree } from 'vuex'

import { CollectionInfo } from '@/types';
import { State } from './state'

export type Getters = {
  databases(state: State): string[];
  currentDatabaseName(state: State, getters: { [K in keyof Getters]: ReturnType<Getters[K]> }): string | null;
  currentCollections(state: State, getters: { [K in keyof Getters]: ReturnType<Getters[K]> }): CollectionInfo[];
}

export const getters: GetterTree<State, State> & Getters = {
  databases(state) {
    return state.databaseSchema ? Object.keys(state.databaseSchema) : [];
  },

  currentDatabaseName(state, getters) {
    return state.currentDatabaseIndex === -1 ? null : getters.databases[state.currentDatabaseIndex];
  },

  currentCollections(state, getters) {
    const selected = (db: string, collection: string) => {
      return (
        state.selectedItems[db] && state.selectedItems[db].includes(collection)
      );
    };

    const db = getters.currentDatabaseName;
    if (db) {
      return state.databaseSchema[db].map(label => ({
        label,
        selected: selected(db, label)
      }));
    } else {
      return [];
    }
  }

}