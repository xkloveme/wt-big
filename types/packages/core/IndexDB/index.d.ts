import Dexie from 'dexie';
declare type ImageCacheDB = {
    id?: number;
    picture?: Blob;
    name?: string;
};
declare type ScreenCacheDB = {
    id?: number;
    data?: string;
    name?: string;
};
export default class IndexDB extends Dexie {
    imageCache: Dexie.Table<ImageCacheDB, number>;
    screenCache: Dexie.Table<ScreenCacheDB, number>;
    constructor();
}
export {};
