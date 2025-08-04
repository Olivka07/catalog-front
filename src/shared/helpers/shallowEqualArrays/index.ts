export const shallowEqualArrays = <T>(prev: T[], next: T[]): boolean => {
    if (prev === next) return true;
    if (!prev || !next || prev.length !== next.length) return false;

    const length = prev.length;

    for (let i = 0; i < length; i++) {
        if (!Object.is(prev[i], next[i])) return false;
    }

    return true;
};
