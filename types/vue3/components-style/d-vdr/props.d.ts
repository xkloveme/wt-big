declare const _default: {
    id: {
        type: StringConstructor;
    };
    disableUserSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventDeactivation: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    w: {
        type: NumberConstructor;
        default: number;
    };
    h: {
        type: NumberConstructor;
        default: number;
    };
    x: {
        type: NumberConstructor;
        default: number;
    };
    y: {
        type: NumberConstructor;
        default: number;
    };
    z: {
        type: NumberConstructor;
        default: string;
    };
    scaleRatio: {
        type: NumberConstructor;
        default: number;
        validator: (val: any) => boolean;
    };
};
export default _default;
