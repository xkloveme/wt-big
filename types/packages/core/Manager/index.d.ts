import Factory from '@dorring/sdk/core/Base/factory';
import Log from '@dorring/sdk/core/Log';
import Http from '@dorring/sdk/core/Http';
import Screen from '@dorring/sdk/core/Screen';
import Temporary from '@dorring/sdk/core/Temporary';
import ScreenCache from '@dorring/sdk/core/IndexDB/screenCache';
import ImageCache from '@dorring/sdk/core/IndexDB/imageCache';
export default class Manager extends Factory<Manager> {
    http: Http;
    screen: Screen;
    temporary: Temporary;
    log: Log;
    version: any;
    screenCache: ScreenCache;
    imageCache: ImageCache;
}
