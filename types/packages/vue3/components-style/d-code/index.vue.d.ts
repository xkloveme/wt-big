declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default(): any[];
    };
}, {
    currentVal: import("vue").WritableComputedRef<string>;
    error: import("vue").Ref<boolean>;
    mode: import("vue").Ref<string>;
    modes: import("vue").Ref<string[]>;
    expandedModes: import("vue").Ref<string[]>;
    id: import("vue").Ref<string>;
    editor: import("vue").Ref<any>;
    json: import("vue").Ref<any[]>;
    internalChange: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default(): any[];
    };
}>>, {
    modelValue: unknown[] | Record<string, any>;
}>;
export default _default;
