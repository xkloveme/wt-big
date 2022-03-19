import WidgetAnimation from '@dorring/sdk/core/Widget/animation';
import WidgetApi from '@dorring/sdk/core/Widget/api';
import WidgetBorder from '@dorring/sdk/core/Widget/border';
import WidgetFont from '@dorring/sdk/core/Widget/font';
import WidgetBackground from '@dorring/sdk/core/Widget/background';
export default class WidgetConfig {
    name: string;
    version: string;
    type: string;
    data: Array<any>;
    avatar: string;
    width: number;
    height: number;
    background: WidgetBackground | null;
    font: WidgetFont | null;
    border: WidgetBorder | null;
    animation: WidgetAnimation;
    api: WidgetApi | null;
    constructor(obj: {
        name: string;
        width: number;
        height: number;
        data?: Array<any>;
        version?: string;
        type?: string;
        avatar?: string;
        background?: WidgetBackground | null;
        border?: WidgetBorder | null;
        font?: WidgetFont | null;
        animation?: WidgetAnimation | null;
        api?: WidgetApi | null;
    });
}
