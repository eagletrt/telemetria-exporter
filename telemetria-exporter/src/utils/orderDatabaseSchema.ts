import { DatabaseSchema } from "@/types";

export function orderDatabaseSchema (schema: DatabaseSchema): void {
    for (const db in schema) {
        schema[db] = schema[db].sort();
    }
}
