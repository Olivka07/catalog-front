type RangeHelper<
    From extends number,
    To extends number,
    Acc extends number[],
    Result extends number = From,
    NewAcc extends number[] = [From, ...Acc]
> = From extends To
    ? Result
    : RangeHelper<NewAcc['length'], To, NewAcc, Result | NewAcc['length']>;

export type RangeNumber<
    From extends number,
    To extends number = From,
    Acc extends number[] = []
> = Acc['length'] extends From
    ? RangeHelper<From, To, Acc>
    : RangeNumber<From, To, [From, ...Acc]>;
