import Factory from '@dorring/sdk/core/Base/factory';
export default class Emitter extends Factory<Emitter> {
    private events;
    constructor();
    on(event: string, callback: Function): Emitter;
    off(event: string, callback: Function): Emitter;
    emit(...args: any): Emitter;
    once(event: string, callback: Function): Emitter;
}
