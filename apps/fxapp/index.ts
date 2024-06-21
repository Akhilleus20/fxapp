import { Notifier, JSON, HttpRequest, HTTP } from '@klave/sdk';
import { BitcoinPriceResult, BitcoinPriceStructure, ErrorMessage } from './types';

/**
 * @query
 */
export function grabRandomInt(input: string): void {

    const query: HttpRequest = {
        hostname: 'api.coindesk.com',
        port: 443,
        path: '/v1/bpi/currentprice.json',
        headers: [],
        body: ''
    };

    const response = HTTP.request(query);
    if (!response) {
        Notifier.sendJson<ErrorMessage>({
            success: false,
            message: `HTTP call went wrong !`
        });
        return;
    }

    const bitcoinPriceStructure = JSON.parse<BitcoinPriceStructure>(response.body);
    Notifier.sendJson<BitcoinPriceResult>({
        success: true,
        bitcoinPrice: bitcoinPriceStructure
    });
};