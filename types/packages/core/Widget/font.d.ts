export default class WidgetFont {
    color: string;
    textAlign: 'left' | 'right' | 'center';
    size: number;
    lineHeight: number;
    constructor(obj?: {
        color?: string;
        textAlign?: 'left' | 'right' | 'center';
        size?: number;
        lineHeight?: number;
    });
}
