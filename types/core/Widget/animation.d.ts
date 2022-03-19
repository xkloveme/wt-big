export default class WidgetAnimation {
    enable: boolean;
    enter: string;
    duration: number;
    delay: number;
    constructor(obj?: {
        duration?: number;
        delay?: number;
        enter?: string;
    });
}
