import { JSON } from '@klave/sdk';

@serializable
export class ErrorMessage {
    success!: boolean;
    message!: string;
}

// @ts-ignore
@serializable
export class FxRateDataResult {
    EUR!: number;
    GBP!: number;
    CHF!: number;
}

// @ts-ignore
@serializable
export class FxRateData {
    base!: string;
    results!: FxRateDataResult;
    updated!: string;
}

// @ts-ignore
@serializable
export class FxRateResult {
    success!: boolean;
    rates!: FxRateData;
}

// @ts-ignore
@serializable
export class NumberVect {
    vect!: i32[];
}

@serializable
export class NumberVectResult {
    success!: boolean;
    vect!: string;
}

@serializable
export class FetchInput {
    key!: string;
}

@serializable
export class FetchOutput {
    success!: boolean;
    value!: string;
}