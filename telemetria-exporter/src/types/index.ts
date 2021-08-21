export enum Status {
    NONE = 'NONE',
    FETCHING = 'FETCHING',
    EDITING = 'EDITING',
    EXPORTING = 'EXPORTING',
    FETCHING_ERROR = 'FETCHING_ERROR',
    EXPORTING_ERROR = 'EXPORTING_ERROR'
}

export type DatabaseSchema = Record<string, string[]>;

export interface CollectionsToExport {
    collectionsToExport: DatabaseSchema;
}

export interface CollectionInfo {
    label: string;
    selected: boolean;
}

export enum ItemType {
    DB = 'DB',
    COLLECTION = 'COLLECTION'
}
