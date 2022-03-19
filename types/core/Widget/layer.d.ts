export default class WidgetLayer {
    zIndex: number;
    scene: string;
    id: string;
    widgets: Array<WidgetLayer>;
    group: boolean;
    constructor(obj: {
        zIndex: number;
        scene: string;
        id: string;
        widgets?: Array<WidgetLayer>;
        group?: boolean;
    });
}
