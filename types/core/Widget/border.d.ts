export default class WidgetBorder {
    color: string;
    width: number[];
    type: 'solid' | 'dashed' | 'double' | 'dotted' | 'none';
    constructor(obj?: {
        color?: string;
        width?: number[];
        type?: 'solid' | 'dashed' | 'double' | 'dotted' | 'none';
    });
}
