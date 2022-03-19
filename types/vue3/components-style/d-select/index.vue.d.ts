declare const _default: import("vue").DefineComponent<{
    modelValue: {};
    list: {
        type: ArrayConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    focus: () => void;
    blur: () => void;
    currentVal: import("vue").Ref<unknown>;
    focusState: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {};
    list: {
        type: ArrayConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    disabled: boolean;
}>;
export default _default;
