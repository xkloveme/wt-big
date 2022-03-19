declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    change: (val: any) => void;
    alpha: import("vue").Ref<boolean>;
    currentVal: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    clearable: boolean;
}>;
export default _default;
