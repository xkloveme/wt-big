declare const _default: import("vue").DefineComponent<{
    editableScene: {
        type: FunctionConstructor;
    };
}, {
    style: import("vue").ComputedRef<{
        left: string;
        top: string;
    }>;
    list: import("vue").Ref<({
        label: string;
        disabled: boolean;
        handler: () => any;
    } | {
        label: string;
        handler: () => void;
        disabled?: unknown;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editableScene: {
        type: FunctionConstructor;
    };
}>>, {}>;
export default _default;
