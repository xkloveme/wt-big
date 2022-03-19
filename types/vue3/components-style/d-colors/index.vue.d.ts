declare const _default: import("vue").DefineComponent<{
    list: {
        type: ArrayConstructor;
        default(): any[];
    };
    direction: {
        type: NumberConstructor;
    };
}, {
    colorType: import("vue").WritableComputedRef<"纯色" | "线性渐变">;
    background: {
        value: string;
        label: string;
    }[];
    updateColor: (val: any, index: any) => void;
    createColor: () => void;
    removeColor: (index: any) => void;
    updateDirection: (val: any) => void;
    destroyColor: () => void;
    currentDirection: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: ArrayConstructor;
        default(): any[];
    };
    direction: {
        type: NumberConstructor;
    };
}>>, {
    list: unknown[];
}>;
export default _default;
