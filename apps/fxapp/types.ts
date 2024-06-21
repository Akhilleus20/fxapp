import { JSON } from '@klave/sdk';

@serializable
export class ErrorMessage {
    success!: boolean;
    message!: string;
}

@serializable
export class TimeStructure {
    updated!: string;
    updatedISO!: string;
    updateduk!: string;
}

@serializable
export class BitcoinPrice {
    code!: string;
    symbol!: string;
    rate!: string;
    description!: string;
    rate_float!: number;
}

@serializable
export class BitcoinPrices {
    USD!: BitcoinPrice;
    GBP!: BitcoinPrice;
    EUR!: BitcoinPrice;
}

@serializable
export class BitcoinPriceStructure {
    time!: TimeStructure;
    disclaimer!: string;
    chartName!: string;
    bpi!: BitcoinPrices
}

@serializable
export class BitcoinPriceResult {
    success!: boolean;
    bitcoinPrice!: BitcoinPriceStructure;
}