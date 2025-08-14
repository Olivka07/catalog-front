export const isIncludeStr = (
    searchString: string,
    ...checkStrings: string[]
) => {
    return checkStrings.some((str) =>
        str.toLowerCase().includes(searchString.toLowerCase())
    );
};
