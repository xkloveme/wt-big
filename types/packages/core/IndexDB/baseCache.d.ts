import Factory from '@dorring/sdk/core/Base/factory';
import IndexDB from '@dorring/sdk/core/IndexDB';
export default class BaseCache extends Factory<BaseCache> {
    db: IndexDB | null;
    expirationTime: number;
    constructor(db: IndexDB);
}
