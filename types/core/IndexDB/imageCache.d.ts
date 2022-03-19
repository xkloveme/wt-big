import BaseCache from '@dorring/sdk/core/IndexDB/baseCache';
export default class ImageCache extends BaseCache {
    add(name: string, url: any): void;
    get(name: string): Promise<string>;
}
