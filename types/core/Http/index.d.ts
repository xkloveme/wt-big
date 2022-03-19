import Emitter from './emitter';
import Task from './task';
export default class Http extends Emitter {
    errorJudge: null | Function;
    limit: number;
    private loopPool;
    private waitPool;
    private currentPool;
    private loading;
    static POOL_START: string;
    static POOL_ADD: string;
    static POOL_UPDATE: string;
    static POOL_STOP: string;
    private timer;
    constructor(obj: any);
    init(): void;
    pushOne(task: Task, id?: string): void;
    private push2Wait;
    private retry;
    private startInterval;
    private usePath;
    private run;
    abortOne(id: string): void;
    abortAll(): void;
    private stop;
    private stopLoop;
}
