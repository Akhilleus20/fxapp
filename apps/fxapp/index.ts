import { Notifier, JSON, HttpRequest, HTTP } from '@klave/sdk';
import { ErrorMessage, NumberVect, NumberVectResult } from './types';


/**
 * @query
 */
export function grabRandomInt(): void {

    const query: HttpRequest = {
        hostname: 'randomnumberapi.com',
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

    const randNumbers = JSON.parse<NumberVect>(response.body);
    Notifier.sendJson<NumberVectResult>({
        success: true,
        vect: randNumbers
    });
};