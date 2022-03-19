declare const _default: import("vue").DefineComponent<{
    topMinHeight: {
        default: number;
        type: NumberConstructor;
    };
    bottomMinHeight: {
        default: number;
        type: NumberConstructor;
    };
}, {
    mousedown: (e: MouseEvent) => void;
    mousemove: (e: MouseEvent) => void;
    mouseup: () => void;
    dom: import("vue").Ref<{}>;
    drag: import("vue").Ref<boolean>;
    startX: import("vue").Ref<number>;
    startY: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    topMinHeight: {
        default: number;
        type: NumberConstructor;
    };
    bottomMinHeight: {
        default: number;
        type: NumberConstructor;
    };
}>>, {
    topMinHeight: number;
    bottomMinHeight: number;
}>;
export default _default;
