declare const _default: import("vue").DefineComponent<{
    modelValue: {};
    format: {
        type: StringConstructor;
    };
    prepend: {
        type: StringConstructor;
    };
    append: {
        type: StringConstructor;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
}, {
    focus: () => void;
    blur: () => void;
    currentAppend: import("vue").Ref<string>;
    currentPrepend: import("vue").Ref<string>;
    currentVal: import("vue").Ref<unknown>;
    focusState: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {};
    format: {
        type: StringConstructor;
    };
    prepend: {
        type: StringConstructor;
    };
    append: {
        type: StringConstructor;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    width: string;
}>;
export default _default;
