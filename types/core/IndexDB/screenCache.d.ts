import BaseCache from '@dorring/sdk/core/IndexDB/baseCache';
export default class ScreenCache extends BaseCache {
    add(name: string, data: any): Promise<unknown>;
    get(name: string): Promise<any>;
}
