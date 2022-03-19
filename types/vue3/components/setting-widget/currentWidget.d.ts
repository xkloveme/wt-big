declare const _default: import("vue").ComputedRef<{
    id: string;
    x: number;
    y: number;
    group: boolean;
    hide: boolean;
    lock: boolean;
    name: string;
    version: string;
    type: string;
    data: any[];
    avatar: string;
    width: number;
    height: number;
    background: {
        color: string[];
        gradientDirection: number;
    };
    font: {
        color: string;
        textAlign: "left" | "right" | "center";
        size: number;
        lineHeight: number;
    };
    border: {
        color: string;
        width: number[];
        type: "solid" | "dashed" | "double" | "dotted" | "none";
    };
    animation: {
        enable: boolean;
        enter: string;
        duration: number;
        delay: number;
    };
    api: {
        url: string;
        method: import("axios").Method;
        loopTime: number;
        loop: boolean;
        params: {};
        headers: {
            [x: string]: string;
        };
        path: string;
        request: () => Promise<any>;
    };
}>;
export default _default;
