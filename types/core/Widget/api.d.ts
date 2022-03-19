import { Method } from 'axios';
export default class WidgetApi {
    url: string;
    method: Method;
    loopTime: number;
    loop: boolean;
    params: {};
    headers: {
        [key: string]: string;
    };
    path: string;
    constructor(obj?: {
        method?: Method;
        url: string;
        params?: any;
        loop?: boolean;
        loopTime?: number;
        headers?: any;
        path?: string;
    });
    request(): Promise<any>;
}
