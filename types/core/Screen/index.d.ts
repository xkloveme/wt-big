import Factory from '@dorring/sdk/core/Base/factory';
import ScreenTask from '@dorring/sdk/core/Screen/task';
import SceneTask from '@dorring/sdk/core/Scene/task';
import WidgetTask from '@dorring/sdk/core/Widget/task';
import WidgetLayer from '@dorring/sdk/core/Widget/layer';
export default class Screen extends Factory<Screen> {
    currentScreen: ScreenTask | null;
    currentWidgets: Array<string>;
    screenList: Array<ScreenTask>;
    screenMd5SchemaList: Array<string>;
    currentScene: SceneTask | null;
    currentWidgetDragging: {
        [key: string]: boolean;
    };
    changeLock(): void;
    makeGroup(): void;
    pushWidgetGroup(obj: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): void;
    cancelGroup(): void;
    cancelSelectWidget(): void;
    selectWidgetById(id: string): void;
    selectOneWidget(id: string): void;
    copyWidget(): void;
    removeWidget(): void;
    pushWidget(widget: WidgetTask): void;
    checkChange(id: any): boolean;
    removeScreenById(id: any): void;
    selectScreenByIndex(index: any): void;
    createScreen(id: any, obj?: any): void;
    get sceneWidgetsBySortList(): Array<WidgetLayer>;
    set sceneWidgetsBySortList(val: Array<WidgetLayer>);
    selectSceneById(id: any): void;
    createScene(): void;
    clearScene(): void;
    removeScene(): void;
    constructor();
}
