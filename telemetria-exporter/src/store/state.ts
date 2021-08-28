import { DatabaseSchema, Status } from "@/types";

export interface State {
    databaseSchema: DatabaseSchema;
    currentDatabaseIndex: number;
    selectedItems: DatabaseSchema;
    message: string;
    status: Status;
    loading: boolean;
}

export const state: State = {
    databaseSchema: {},
    currentDatabaseIndex: -1,
    selectedItems: {},
    message: 'prova',
    status: Status.NONE,
    loading: false
}
