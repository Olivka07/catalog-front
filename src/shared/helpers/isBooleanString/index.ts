export const isBooleanString = (value: string): boolean =>
    value.trim() === 'true' || value.trim() === 'false';
