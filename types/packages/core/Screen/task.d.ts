import WidgetTask from '@dorring/sdk/core/Widget/task';
import WidgetLayer from '@dorring/sdk/core/Widget/layer';
import SceneTask from '@dorring/sdk/core/Scene/task';
export default class ScreenTask {
    version: string;
    id: string;
    name: string;
    scenes: {
        [key: string]: SceneTask;
    };
    widgets: {
        [key: string]: WidgetTask;
    };
    widgetsLayers: Array<WidgetLayer>;
    type: string;
    avatar: string;
    layoutMode: string;
    remark: string;
    createTime: string;
    updateTime: string;
    width: number;
    height: number;
    show: boolean;
    url: string;
    backgroundColor: string[];
    gradientDirection: number;
    backgroundImage: string;
    mainScene: string;
    platform: string;
    domain: string;
    headers: string;
    filter: {
        enable: boolean;
        grayscale: number;
        opacity: number;
        contrast: number;
        brightness: number;
        saturate: number;
        hueRotate: number;
    };
    marketComponents: any[];
    constructor({ id, scenes, widgets, widgetsLayers, layoutMode, backgroundColor, width, height, }: {
        id: any;
        scenes: any;
        widgets: any;
        widgetsLayers?: any[];
        layoutMode?: string;
        backgroundColor?: string[];
        width?: number;
        height?: number;
    });
}
