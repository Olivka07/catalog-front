export const isFalsyValue = (value: unknown) =>
    value === null ||
    value === undefined ||
    Number.isNaN(value) ||
    value === '' ||
    value === 'NaN' ||
    value === false ||
    (Array.isArray(value) && value.length === 0);
