import WidgetApi from '@dorring/sdk/core/Widget/api';
import { Method } from 'axios';
export default class HttpTask extends WidgetApi {
    static STATUS_WAITING: number;
    static STATUS_READY: number;
    static STATUS_LOADING: number;
    static STATUS_RETRY: number;
    static STATUS_FINISH: number;
    needCache: boolean;
    cacheTime: number;
    maxErrorCount: number;
    errorCount: number;
    weight: number;
    status: number;
    lastTime: number;
    thenCb: Function;
    catchCB: Function;
    constructor(obj?: {
        method?: Method;
        url: string;
        params?: any;
        loop?: boolean;
        loopTime?: number;
        headers?: any;
    });
    execut(): Promise<any>;
    then(cb: Function): HttpTask;
    catch(cb: Function): HttpTask;
}
