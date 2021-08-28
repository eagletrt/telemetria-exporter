import { CollectionsToExport, DatabaseSchema } from '@/types';
import axios from 'axios';

function getHostname() {
    const url = new URL(window.location.href);
    const hostname = url.searchParams.get('hostname');
    const host = url.searchParams.get('host') || window.location.hostname;
    const port = url.searchParams.get('port') || window.location.port;
    return hostname || `${host}:${port}`;
}

const HOSTNAME = getHostname();
const PROTOCOL = window.location.protocol.slice(0, -1);

export async function getDatabaseSchema(): Promise<DatabaseSchema> {
    const response = await axios.get(`${PROTOCOL}://${HOSTNAME}/api/database-schema`);
    return response.data;
}

export async function exportJson(selectedItems: DatabaseSchema): Promise<Blob> {
    const body = { collectionsToExport: selectedItems };
    const response = await axios.post(`${PROTOCOL}://${HOSTNAME}/api/export/json`, body, { responseType: 'blob' });
    return response.data;
}

export async function exportCsv(selectedItems: DatabaseSchema): Promise<Blob> {
    const body = { collectionsToExport: selectedItems };
    const response = await axios.post(`${PROTOCOL}://${HOSTNAME}/api/export/csv`, body, { responseType: 'blob' });
    return response.data;
}
