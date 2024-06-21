import { Notifier, Ledger, JSON, HttpRequest, HTTP } from '@klave/sdk';
import { ErrorMessage, FetchInput, FetchOutput, NumberVect, NumberVectResult } from './types';

const myTableName = "my_storage_table";

/**
 * @query
 */
export function grabRandomInt(input: string): void {

    const query: HttpRequest = {
        hostname: 'www.randomnumberapi.com',
        port: 443,
        path: '/api/v1.0/random?min=100&max=1000&count=5',
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

    Notifier.sendJson<NumberVectResult>({
        success: true,
        vect: response.body
    });
};

/**
 * @query
 * @param {FetchInput} input - A parsed input argument
 */
export function fetchValue(input: FetchInput): void {

    let value = Ledger.getTable(myTableName).get(input.key);
    if (value.length === 0) {
        Notifier.sendJson<ErrorMessage>({
            success: false,
            message: `key '${input.key}' not found in table`
        });
    } else {
        Notifier.sendJson<FetchOutput>({
            success: true,
            value
        });
    }
}