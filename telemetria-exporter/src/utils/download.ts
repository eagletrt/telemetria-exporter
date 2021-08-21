function getFileName() {
    const now = new Date();

    return `${now.toISOString()}.zip`;
}

export function downloadFile(data: Blob): void {
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', getFileName());
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
