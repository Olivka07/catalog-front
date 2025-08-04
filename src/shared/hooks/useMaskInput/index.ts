import { MutableRefObject, useEffect } from 'react';

type UseMaskInputProps = {
    ref: MutableRefObject<HTMLInputElement>;
    slots?: string;
    accept?: string;
    onChange?: (value: string) => void;
};

export const useMaskInput = (props: UseMaskInputProps) => {
    const { ref, slots = '_', accept = '\\d', onChange } = props;

    useEffect(() => {
        const target = ref.current;
        const pattern = target.placeholder;
        const slotsSet = new Set(slots);
        const prev = ((j) =>
            Array.from(pattern, (char, idx) =>
                slotsSet.has(char) ? (j = idx + 1) : j
            ))(0);
        const firstSlotCharIdx = [...pattern].findIndex((char) =>
            slotsSet.has(char)
        );
        const acceptRegExp = new RegExp(accept, 'gm');
        const clean = (input: string) => {
            const inputMatchArray =
                input
                    .match(acceptRegExp)
                    ?.map((str) => [...str])
                    .flat() ?? [];
            return Array.from(pattern, (c) =>
                inputMatchArray[0] === c || slotsSet.has(c)
                    ? inputMatchArray.shift() || c
                    : c
            );
        };
        let back = false;
        const format = () => {
            const [i, j] = [target.selectionStart, target.selectionEnd].map(
                (i) => {
                    const idx = clean(target.value.slice(0, i)).findIndex((c) =>
                        slotsSet.has(c)
                    );
                    return idx < 0
                        ? prev.at(-1)
                        : back
                          ? prev[idx - 1] || firstSlotCharIdx
                          : idx;
                }
            );
            const newValue = clean(target.value).join('');
            target.value = newValue;
            onChange?.(newValue);
            target.setSelectionRange(i, j);
            back = false;
        };

        target.addEventListener(
            'keydown',
            (e) => (back = e.key === 'Backspace')
        );
        target.addEventListener('input', format);
        target.addEventListener('focus', format);
        target.addEventListener(
            'blur',
            () => target.value === pattern && (target.value = '')
        );
    }, []);
};
