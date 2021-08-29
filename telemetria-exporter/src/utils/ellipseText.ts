export function ellipseText(text: string, length: number): string {
    const result = text.slice(0, length - 3);
    return result.length === length - 3 ? result.padEnd(length, '.') : result;
}