export declare const on: (element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;
export declare const off: (element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;
export declare const once: (el: HTMLElement, event: string, fn: EventListener) => void;
export declare const getStyle: (element: HTMLElement, styleName: string) => string;
