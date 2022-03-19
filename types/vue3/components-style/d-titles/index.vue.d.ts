declare const _default: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    click: (index: any) => void;
    manager: import("vue").Ref<{
        http: {
            errorJudge: Function;
            limit: number;
            init: () => void;
            pushOne: (task: import("../../../core/Http/task").default, id?: string) => void;
            abortOne: (id: string) => void;
            abortAll: () => void;
            on: (event: string, callback: Function) => import("../../../core/Http/emitter").default;
            off: (event: string, callback: Function) => import("../../../core/Http/emitter").default;
            emit: (...args: any) => import("../../../core/Http/emitter").default;
            once: (event: string, callback: Function) => import("../../../core/Http/emitter").default;
        };
        screen: {
            currentScreen: {
                version: string;
                id: string;
                name: string;
                scenes: {
                    [x: string]: {
                        id: string;
                        name: string;
                    };
                };
                widgets: {
                    [x: string]: {
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
                    };
                };
                widgetsLayers: {
                    zIndex: number;
                    scene: string;
                    id: string;
                    widgets: any[];
                    group: boolean;
                }[];
                type: string;
                avatar: string;
                layoutMode: string;
                remark: string;
                createTime: string;
                updateTime: string;
                width: number;
                height: number;
                show: boolean;
                url: string;
                backgroundColor: string[];
                gradientDirection: number;
                backgroundImage: string;
                mainScene: string;
                platform: string;
                domain: string;
                headers: string;
                filter: {
                    enable: boolean;
                    grayscale: number;
                    opacity: number;
                    contrast: number;
                    brightness: number;
                    saturate: number;
                    hueRotate: number;
                };
                marketComponents: any[];
            };
            currentWidgets: string[];
            screenList: {
                version: string;
                id: string;
                name: string;
                scenes: {
                    [x: string]: {
                        id: string;
                        name: string;
                    };
                };
                widgets: {
                    [x: string]: {
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
                    };
                };
                widgetsLayers: {
                    zIndex: number;
                    scene: string;
                    id: string;
                    widgets: any[];
                    group: boolean;
                }[];
                type: string;
                avatar: string;
                layoutMode: string;
                remark: string;
                createTime: string;
                updateTime: string;
                width: number;
                height: number;
                show: boolean;
                url: string;
                backgroundColor: string[];
                gradientDirection: number;
                backgroundImage: string;
                mainScene: string;
                platform: string;
                domain: string;
                headers: string;
                filter: {
                    enable: boolean;
                    grayscale: number;
                    opacity: number;
                    contrast: number;
                    brightness: number;
                    saturate: number;
                    hueRotate: number;
                };
                marketComponents: any[];
            }[];
            screenMd5SchemaList: string[];
            currentScene: {
                id: string;
                name: string;
            };
            currentWidgetDragging: {
                [x: string]: boolean;
            };
            changeLock: () => void;
            makeGroup: () => void;
            pushWidgetGroup: (obj: {
                x: number;
                y: number;
                width: number;
                height: number;
            }) => void;
            cancelGroup: () => void;
            cancelSelectWidget: () => void;
            selectWidgetById: (id: string) => void;
            selectOneWidget: (id: string) => void;
            copyWidget: () => void;
            removeWidget: () => void;
            pushWidget: (widget: import("../../../core/Widget/task").default) => void;
            checkChange: (id: any) => boolean;
            removeScreenById: (id: any) => void;
            selectScreenByIndex: (index: any) => void;
            createScreen: (id: any, obj?: any) => void;
            sceneWidgetsBySortList: {
                zIndex: number;
                scene: string;
                id: string;
                widgets: any[];
                group: boolean;
            }[];
            selectSceneById: (id: any) => void;
            createScene: () => void;
            clearScene: () => void;
            removeScene: () => void;
        };
        temporary: {
            zoom: number;
            offsetX: number;
            offsetY: number;
            editorContentDrag: boolean;
            editorContentDragging: boolean;
            editorContentStartX: number;
            editorContentStartY: number;
            editorContentClientX: number;
            editorContentClientY: number;
            sceneRightMenu: boolean;
            sceneRightMenuX: number;
            sceneRightMenuY: number;
            widgetRightMenu: boolean;
            widgetRightMenuX: number;
            widgetRightMenuY: number;
            widgetsRightMenu: boolean;
            widgetsRightMenuX: number;
            widgetsRightMenuY: number;
            widgetDragClientX: number;
            widgetDragClientY: number;
            clearRightMenu: () => void;
            scrollLeft: (step?: number) => void;
            scrollRight: (step?: number) => void;
            scrollTop: (step?: number) => void;
            scrollBottom: (step?: number) => void;
            zoomIn: (step?: number) => void;
            zoomOut: (step?: number) => void;
        };
        log: {
            list: {
                httpResponseURL: string;
                httpStatus: number;
                httpResponseText: string;
                errorMessage: string;
                code: "HTTP_ERROR" | "OTHERS";
                date: {
                    toString: () => string;
                    toDateString: () => string;
                    toTimeString: () => string;
                    toLocaleString: {
                        (): string;
                        (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
                    };
                    toLocaleDateString: {
                        (): string;
                        (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
                    };
                    toLocaleTimeString: {
                        (): string;
                        (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
                    };
                    valueOf: () => number;
                    getTime: () => number;
                    getFullYear: () => number;
                    getUTCFullYear: () => number;
                    getMonth: () => number;
                    getUTCMonth: () => number;
                    getDate: () => number;
                    getUTCDate: () => number;
                    getDay: () => number;
                    getUTCDay: () => number;
                    getHours: () => number;
                    getUTCHours: () => number;
                    getMinutes: () => number;
                    getUTCMinutes: () => number;
                    getSeconds: () => number;
                    getUTCSeconds: () => number;
                    getMilliseconds: () => number;
                    getUTCMilliseconds: () => number;
                    getTimezoneOffset: () => number;
                    setTime: (time: number) => number;
                    setMilliseconds: (ms: number) => number;
                    setUTCMilliseconds: (ms: number) => number;
                    setSeconds: (sec: number, ms?: number) => number;
                    setUTCSeconds: (sec: number, ms?: number) => number;
                    setMinutes: (min: number, sec?: number, ms?: number) => number;
                    setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
                    setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
                    setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
                    setDate: (date: number) => number;
                    setUTCDate: (date: number) => number;
                    setMonth: (month: number, date?: number) => number;
                    setUTCMonth: (month: number, date?: number) => number;
                    setFullYear: (year: number, month?: number, date?: number) => number;
                    setUTCFullYear: (year: number, month?: number, date?: number) => number;
                    toUTCString: () => string;
                    toISOString: () => string;
                    toJSON: (key?: any) => string;
                    getVarDate: () => VarDate;
                    [Symbol.toPrimitive]: {
                        (hint: "default"): string;
                        (hint: "string"): string;
                        (hint: "number"): number;
                        (hint: string): string | number;
                    };
                };
            }[];
            push: (log: import("../../../core/Log/task").default) => void;
            clear: () => void;
        };
        version: any;
        screenCache: {
            add: (name: string, data: any) => Promise<unknown>;
            get: (name: string) => Promise<any>;
            db: {
                imageCache: {
                    db: {
                        readonly name: string;
                        readonly tables: {
                            db: any;
                            name: string;
                            schema: {
                                name: string;
                                primKey: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                                indexes: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                }[];
                                mappedClass: Function;
                                idxByName: {
                                    [x: string]: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                };
                                readHook?: (x: any) => any;
                            };
                            hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                            core: {
                                readonly name: string;
                                readonly schema: {
                                    readonly name: string;
                                    readonly primaryKey: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    };
                                    readonly indexes: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    }[];
                                    readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                };
                                mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                            };
                            get: {
                                (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").PromiseExtended<any>;
                                <R_1>(equalityCriterias: {
                                    [key: string]: any;
                                }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                            };
                            where: {
                                (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                            };
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: any;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                            };
                            toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            mapToClass: (constructor: Function) => Function;
                            add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            update: (key: any, changes: {
                                [keyPath: string]: any;
                            }) => import("dexie").PromiseExtended<number>;
                            put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                            clear: () => import("dexie").PromiseExtended<void>;
                            bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                            bulkAdd: {
                                <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B;
                                }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_1 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_1;
                                }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkPut: {
                                <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B_2;
                                }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_3 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_3;
                                }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                        }[];
                        table: <T = any, TKey = any>(tableName: string) => import("dexie").Table<T, TKey>;
                        transaction: {
                            <U>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U | PromiseLike<U>): import("dexie").PromiseExtended<U>;
                            <U_1>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_1 | PromiseLike<U_1>): import("dexie").PromiseExtended<U_1>;
                            <U_2>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_2 | PromiseLike<U_2>): import("dexie").PromiseExtended<U_2>;
                            <U_3>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_3 | PromiseLike<U_3>): import("dexie").PromiseExtended<U_3>;
                            <U_4>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_4 | PromiseLike<U_4>): import("dexie").PromiseExtended<U_4>;
                            <U_5>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: () => U_5 | PromiseLike<U_5>): import("dexie").PromiseExtended<U_5>;
                        };
                    };
                    name: string;
                    schema: {
                        name: string;
                        primKey: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        };
                        indexes: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        }[];
                        mappedClass: Function;
                        idxByName: {
                            [x: string]: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                        };
                        readHook?: (x: any) => any;
                    };
                    hook: import("dexie").TableHooks<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    core: {
                        readonly name: string;
                        readonly schema: {
                            readonly name: string;
                            readonly primaryKey: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            };
                            readonly indexes: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            }[];
                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                        };
                        mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                        get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                        getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                        query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                        openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                        count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                    };
                    get: {
                        (key: number): import("dexie").PromiseExtended<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }>;
                        <R_4>(key: number, thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }, R_4>): import("dexie").PromiseExtended<R_4>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").PromiseExtended<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }>;
                        <R_5>(equalityCriterias: {
                            [key: string]: any;
                        }, thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }, R_5>): import("dexie").PromiseExtended<R_5>;
                    };
                    where: {
                        (index: string | string[]): import("dexie").WhereClause<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }, number>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").Collection<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }, number>;
                    };
                    filter: (fn: (obj: {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }) => boolean) => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    count: {
                        (): import("dexie").PromiseExtended<number>;
                        <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                    };
                    offset: (n: number) => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    limit: (n: number) => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    each: (callback: (obj: {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, cursor: {
                        key: any;
                        primaryKey: number;
                    }) => any) => import("dexie").PromiseExtended<void>;
                    toArray: {
                        (): import("dexie").PromiseExtended<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[]>;
                        <R_6>(thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], R_6>): import("dexie").PromiseExtended<R_6>;
                    };
                    toCollection: () => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    orderBy: (index: string | string[]) => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    reverse: () => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    mapToClass: (constructor: Function) => Function;
                    add: (item: {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, key?: number) => import("dexie").PromiseExtended<number>;
                    update: (key: number | {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, changes: {
                        [keyPath: string]: any;
                    }) => import("dexie").PromiseExtended<number>;
                    put: (item: {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, key?: number) => import("dexie").PromiseExtended<number>;
                    delete: (key: number) => import("dexie").PromiseExtended<void>;
                    clear: () => import("dexie").PromiseExtended<void>;
                    bulkGet: (keys: number[]) => import("dexie").PromiseExtended<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }[]>;
                    bulkAdd: {
                        <B_4 extends boolean>(items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_4;
                        }): import("dexie").PromiseExtended<B_4 extends true ? number[] : number>;
                        <B_5 extends boolean>(items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], options: {
                            allKeys: B_5;
                        }): import("dexie").PromiseExtended<B_5 extends true ? number[] : number>;
                        (items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<number>;
                    };
                    bulkPut: {
                        <B_6 extends boolean>(items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_6;
                        }): import("dexie").PromiseExtended<B_6 extends true ? number[] : number>;
                        <B_7 extends boolean>(items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], options: {
                            allKeys: B_7;
                        }): import("dexie").PromiseExtended<B_7 extends true ? number[] : number>;
                        (items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<number>;
                    };
                    bulkDelete: (keys: number[]) => import("dexie").PromiseExtended<void>;
                };
                screenCache: {
                    db: {
                        readonly name: string;
                        readonly tables: {
                            db: any;
                            name: string;
                            schema: {
                                name: string;
                                primKey: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                                indexes: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                }[];
                                mappedClass: Function;
                                idxByName: {
                                    [x: string]: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                };
                                readHook?: (x: any) => any;
                            };
                            hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                            core: {
                                readonly name: string;
                                readonly schema: {
                                    readonly name: string;
                                    readonly primaryKey: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    };
                                    readonly indexes: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    }[];
                                    readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                };
                                mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                            };
                            get: {
                                (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").PromiseExtended<any>;
                                <R_1>(equalityCriterias: {
                                    [key: string]: any;
                                }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                            };
                            where: {
                                (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                            };
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: any;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                            };
                            toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            mapToClass: (constructor: Function) => Function;
                            add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            update: (key: any, changes: {
                                [keyPath: string]: any;
                            }) => import("dexie").PromiseExtended<number>;
                            put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                            clear: () => import("dexie").PromiseExtended<void>;
                            bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                            bulkAdd: {
                                <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B;
                                }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_1 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_1;
                                }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkPut: {
                                <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B_2;
                                }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_3 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_3;
                                }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                        }[];
                        table: <T = any, TKey = any>(tableName: string) => import("dexie").Table<T, TKey>;
                        transaction: {
                            <U>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U | PromiseLike<U>): import("dexie").PromiseExtended<U>;
                            <U_1>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_1 | PromiseLike<U_1>): import("dexie").PromiseExtended<U_1>;
                            <U_2>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_2 | PromiseLike<U_2>): import("dexie").PromiseExtended<U_2>;
                            <U_3>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_3 | PromiseLike<U_3>): import("dexie").PromiseExtended<U_3>;
                            <U_4>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_4 | PromiseLike<U_4>): import("dexie").PromiseExtended<U_4>;
                            <U_5>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: () => U_5 | PromiseLike<U_5>): import("dexie").PromiseExtended<U_5>;
                        };
                    };
                    name: string;
                    schema: {
                        name: string;
                        primKey: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        };
                        indexes: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        }[];
                        mappedClass: Function;
                        idxByName: {
                            [x: string]: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                        };
                        readHook?: (x: any) => any;
                    };
                    hook: import("dexie").TableHooks<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    core: {
                        readonly name: string;
                        readonly schema: {
                            readonly name: string;
                            readonly primaryKey: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            };
                            readonly indexes: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            }[];
                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                        };
                        mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                        get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                        getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                        query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                        openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                        count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                    };
                    get: {
                        (key: number): import("dexie").PromiseExtended<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }>;
                        <R_7>(key: number, thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }, R_7>): import("dexie").PromiseExtended<R_7>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").PromiseExtended<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }>;
                        <R_8>(equalityCriterias: {
                            [key: string]: any;
                        }, thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }, R_8>): import("dexie").PromiseExtended<R_8>;
                    };
                    where: {
                        (index: string | string[]): import("dexie").WhereClause<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }, number>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").Collection<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }, number>;
                    };
                    filter: (fn: (obj: {
                        id?: number;
                        data?: string;
                        name?: string;
                    }) => boolean) => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    count: {
                        (): import("dexie").PromiseExtended<number>;
                        <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                    };
                    offset: (n: number) => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    limit: (n: number) => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    each: (callback: (obj: {
                        id?: number;
                        data?: string;
                        name?: string;
                    }, cursor: {
                        key: any;
                        primaryKey: number;
                    }) => any) => import("dexie").PromiseExtended<void>;
                    toArray: {
                        (): import("dexie").PromiseExtended<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }[]>;
                        <R_9>(thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], R_9>): import("dexie").PromiseExtended<R_9>;
                    };
                    toCollection: () => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    orderBy: (index: string | string[]) => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    reverse: () => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    mapToClass: (constructor: Function) => Function;
                    add: (item: {
                        id?: number;
                        data?: string;
                        name?: string;
                    }, key?: number) => import("dexie").PromiseExtended<number>;
                    update: (key: number | {
                        id?: number;
                        data?: string;
                        name?: string;
                    }, changes: {
                        [keyPath: string]: any;
                    }) => import("dexie").PromiseExtended<number>;
                    put: (item: {
                        id?: number;
                        data?: string;
                        name?: string;
                    }, key?: number) => import("dexie").PromiseExtended<number>;
                    delete: (key: number) => import("dexie").PromiseExtended<void>;
                    clear: () => import("dexie").PromiseExtended<void>;
                    bulkGet: (keys: number[]) => import("dexie").PromiseExtended<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }[]>;
                    bulkAdd: {
                        <B_8 extends boolean>(items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_8;
                        }): import("dexie").PromiseExtended<B_8 extends true ? number[] : number>;
                        <B_9 extends boolean>(items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], options: {
                            allKeys: B_9;
                        }): import("dexie").PromiseExtended<B_9 extends true ? number[] : number>;
                        (items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<number>;
                    };
                    bulkPut: {
                        <B_10 extends boolean>(items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_10;
                        }): import("dexie").PromiseExtended<B_10 extends true ? number[] : number>;
                        <B_11 extends boolean>(items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], options: {
                            allKeys: B_11;
                        }): import("dexie").PromiseExtended<B_11 extends true ? number[] : number>;
                        (items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<number>;
                    };
                    bulkDelete: (keys: number[]) => import("dexie").PromiseExtended<void>;
                };
                readonly name: string;
                readonly tables: {
                    db: any;
                    name: string;
                    schema: {
                        name: string;
                        primKey: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        };
                        indexes: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        }[];
                        mappedClass: Function;
                        idxByName: {
                            [x: string]: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                        };
                        readHook?: (x: any) => any;
                    };
                    hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                    core: {
                        readonly name: string;
                        readonly schema: {
                            readonly name: string;
                            readonly primaryKey: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            };
                            readonly indexes: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            }[];
                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                        };
                        mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                        get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                        getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                        query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                        openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                        count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                    };
                    get: {
                        (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                        <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").PromiseExtended<any>;
                        <R_1>(equalityCriterias: {
                            [key: string]: any;
                        }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                    };
                    where: {
                        (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").Collection<any, import("dexie").IndexableType>;
                    };
                    filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    count: {
                        (): import("dexie").PromiseExtended<number>;
                        <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                    };
                    offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    each: (callback: (obj: any, cursor: {
                        key: any;
                        primaryKey: import("dexie").IndexableType;
                    }) => any) => import("dexie").PromiseExtended<void>;
                    toArray: {
                        (): import("dexie").PromiseExtended<any[]>;
                        <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                    };
                    toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                    orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                    mapToClass: (constructor: Function) => Function;
                    add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                    update: (key: any, changes: {
                        [keyPath: string]: any;
                    }) => import("dexie").PromiseExtended<number>;
                    put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                    delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                    clear: () => import("dexie").PromiseExtended<void>;
                    bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                    bulkAdd: {
                        <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B;
                        }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                        <B_1 extends boolean>(items: readonly any[], options: {
                            allKeys: B_1;
                        }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                        (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                    };
                    bulkPut: {
                        <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_2;
                        }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                        <B_3 extends boolean>(items: readonly any[], options: {
                            allKeys: B_3;
                        }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                        (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                    };
                    bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                }[];
                readonly verno: number;
                readonly vip: {
                    readonly name: string;
                    readonly tables: {
                        db: any;
                        name: string;
                        schema: {
                            name: string;
                            primKey: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                            indexes: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            }[];
                            mappedClass: Function;
                            idxByName: {
                                [x: string]: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                            };
                            readHook?: (x: any) => any;
                        };
                        hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                        core: {
                            readonly name: string;
                            readonly schema: {
                                readonly name: string;
                                readonly primaryKey: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                };
                                readonly indexes: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                }[];
                                readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                            };
                            mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                            get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                            getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                            query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                            openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                            count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                        };
                        get: {
                            (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                            <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").PromiseExtended<any>;
                            <R_1>(equalityCriterias: {
                                [key: string]: any;
                            }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                        };
                        where: {
                            (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        count: {
                            (): import("dexie").PromiseExtended<number>;
                            <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                        };
                        offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        each: (callback: (obj: any, cursor: {
                            key: any;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        toArray: {
                            (): import("dexie").PromiseExtended<any[]>;
                            <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                        };
                        toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        mapToClass: (constructor: Function) => Function;
                        add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        update: (key: any, changes: {
                            [keyPath: string]: any;
                        }) => import("dexie").PromiseExtended<number>;
                        put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                        clear: () => import("dexie").PromiseExtended<void>;
                        bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                        bulkAdd: {
                            <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B;
                            }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_1 extends boolean>(items: readonly any[], options: {
                                allKeys: B_1;
                            }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkPut: {
                            <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B_2;
                            }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_3 extends boolean>(items: readonly any[], options: {
                                allKeys: B_3;
                            }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                    }[];
                    readonly verno: number;
                    readonly vip: any;
                    readonly _allTables: {
                        [x: string]: {
                            db: any;
                            name: string;
                            schema: {
                                name: string;
                                primKey: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                                indexes: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                }[];
                                mappedClass: Function;
                                idxByName: {
                                    [x: string]: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                };
                                readHook?: (x: any) => any;
                            };
                            hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                            core: {
                                readonly name: string;
                                readonly schema: {
                                    readonly name: string;
                                    readonly primaryKey: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    };
                                    readonly indexes: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    }[];
                                    readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                };
                                mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                            };
                            get: {
                                (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").PromiseExtended<any>;
                                <R_1>(equalityCriterias: {
                                    [key: string]: any;
                                }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                            };
                            where: {
                                (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                            };
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: any;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                            };
                            toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            mapToClass: (constructor: Function) => Function;
                            add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            update: (key: any, changes: {
                                [keyPath: string]: any;
                            }) => import("dexie").PromiseExtended<number>;
                            put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                            clear: () => import("dexie").PromiseExtended<void>;
                            bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                            bulkAdd: {
                                <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B;
                                }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_1 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_1;
                                }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkPut: {
                                <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B_2;
                                }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_3 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_3;
                                }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                        };
                    };
                    readonly core: {
                        stack: "dbcore";
                        transaction: (stores: string[], mode: "readonly" | "readwrite", options?: import("dexie").DbCoreTransactionOptions) => import("dexie").DBCoreTransaction;
                        readonly MIN_KEY: any;
                        readonly MAX_KEY: any;
                        readonly schema: {
                            name: string;
                            tables: {
                                readonly name: string;
                                readonly primaryKey: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                };
                                readonly indexes: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                }[];
                                readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                            }[];
                        };
                        table: (name: string) => import("dexie").DBCoreTable;
                    };
                    _createTransaction: (this: import("dexie").Dexie, mode: IDBTransactionMode, storeNames: ArrayLike<string>, dbschema: import("dexie").DbSchema, parentTransaction?: import("dexie").Transaction) => import("dexie").Transaction;
                    _dbSchema: {
                        [x: string]: {
                            name: string;
                            primKey: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                            indexes: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            }[];
                            mappedClass: Function;
                            idxByName: {
                                [x: string]: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                            };
                            readHook?: (x: any) => any;
                        };
                    };
                    version: (versionNumber: number) => import("dexie").Version;
                    on: import("dexie").DbEvents;
                    open: () => import("dexie").PromiseExtended<import("dexie").Dexie>;
                    table: <T_1 = any, TKey_1 = import("dexie").IndexableType>(tableName: string) => import("dexie").Table<T_1, TKey_1>;
                    transaction: {
                        <U_6>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_6 | PromiseLike<U_6>): import("dexie").PromiseExtended<U_6>;
                        <U_7>(mode: import("dexie").TransactionMode, table: string, scope: (trans: import("dexie").Transaction) => U_7 | PromiseLike<U_7>): import("dexie").PromiseExtended<U_7>;
                        <U_8>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_8 | PromiseLike<U_8>): import("dexie").PromiseExtended<U_8>;
                        <U_9>(mode: import("dexie").TransactionMode, table: string, table2: string, scope: (trans: import("dexie").Transaction) => U_9 | PromiseLike<U_9>): import("dexie").PromiseExtended<U_9>;
                        <U_10>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_10 | PromiseLike<U_10>): import("dexie").PromiseExtended<U_10>;
                        <U_11>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, scope: (trans: import("dexie").Transaction) => U_11 | PromiseLike<U_11>): import("dexie").PromiseExtended<U_11>;
                        <U_12>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_12 | PromiseLike<U_12>): import("dexie").PromiseExtended<U_12>;
                        <U_13>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, table4: string, scope: (trans: import("dexie").Transaction) => U_13 | PromiseLike<U_13>): import("dexie").PromiseExtended<U_13>;
                        <U_14>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_14 | PromiseLike<U_14>): import("dexie").PromiseExtended<U_14>;
                        <U_15>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, table4: string, table5: string, scope: (trans: import("dexie").Transaction) => U_15 | PromiseLike<U_15>): import("dexie").PromiseExtended<U_15>;
                        <U_16>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: (trans: import("dexie").Transaction) => U_16 | PromiseLike<U_16>): import("dexie").PromiseExtended<U_16>;
                        <U_17>(mode: import("dexie").TransactionMode, tables: string[], scope: (trans: import("dexie").Transaction) => U_17 | PromiseLike<U_17>): import("dexie").PromiseExtended<U_17>;
                    };
                    close: () => void;
                    delete: () => import("dexie").PromiseExtended<void>;
                    isOpen: () => boolean;
                    hasBeenClosed: () => boolean;
                    hasFailed: () => boolean;
                    dynamicallyOpened: () => boolean;
                    backendDB: () => IDBDatabase;
                    use: (middleware: import("dexie").Middleware<import("dexie").DBCore>) => import("dexie").Dexie;
                    unuse: {
                        ({ stack, create }: import("dexie").Middleware<{
                            stack: "dbcore";
                        }>): import("dexie").Dexie;
                        ({ stack, name }: {
                            stack: "dbcore";
                            name: string;
                        }): import("dexie").Dexie;
                    };
                    Table: {
                        prototype: {
                            db: any;
                            name: string;
                            schema: {
                                name: string;
                                primKey: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                                indexes: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                }[];
                                mappedClass: Function;
                                idxByName: {
                                    [x: string]: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                };
                                readHook?: (x: any) => any;
                            };
                            hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                            core: {
                                readonly name: string;
                                readonly schema: {
                                    readonly name: string;
                                    readonly primaryKey: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    };
                                    readonly indexes: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    }[];
                                    readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                };
                                mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                            };
                            get: {
                                (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").PromiseExtended<any>;
                                <R_1>(equalityCriterias: {
                                    [key: string]: any;
                                }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                            };
                            where: {
                                (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                            };
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: any;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                            };
                            toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            mapToClass: (constructor: Function) => Function;
                            add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            update: (key: any, changes: {
                                [keyPath: string]: any;
                            }) => import("dexie").PromiseExtended<number>;
                            put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                            clear: () => import("dexie").PromiseExtended<void>;
                            bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                            bulkAdd: {
                                <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B;
                                }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_1 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_1;
                                }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkPut: {
                                <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B_2;
                                }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_3 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_3;
                                }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                        };
                    };
                    WhereClause: {
                        prototype: {
                            above: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            aboveOrEqual: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            anyOf: {
                                (keys: readonly import("dexie").IndexableType[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                                (...keys: import("dexie").IndexableType[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            anyOfIgnoreCase: {
                                (keys: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                                (...keys: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            below: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            belowOrEqual: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            between: (lower: any, upper: any, includeLower?: boolean, includeUpper?: boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            equals: (key: import("dexie").IndexableType) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            equalsIgnoreCase: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            inAnyRange: (ranges: readonly {
                                0: any;
                                1: any;
                            }[], options?: {
                                includeLowers?: boolean;
                                includeUppers?: boolean;
                            }) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            startsWith: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            startsWithAnyOf: {
                                (prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                                (...prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            startsWithIgnoreCase: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            startsWithAnyOfIgnoreCase: {
                                (prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                                (...prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            noneOf: (keys: readonly import("dexie").IndexableType[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            notEqual: (key: import("dexie").IndexableType) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                    };
                    Version: {
                        prototype: {
                            stores: (schema: {
                                [tableName: string]: string;
                            }) => import("dexie").Version;
                            upgrade: (fn: (trans: import("dexie").Transaction) => void | PromiseLike<any>) => import("dexie").Version;
                        };
                    };
                    Transaction: {
                        prototype: {
                            db: {
                                readonly name: string;
                                readonly tables: {
                                    db: any;
                                    name: string;
                                    schema: {
                                        name: string;
                                        primKey: {
                                            name: string;
                                            keyPath: string | string[];
                                            unique: boolean;
                                            multi: boolean;
                                            auto: boolean;
                                            compound: boolean;
                                            src: string;
                                        };
                                        indexes: {
                                            name: string;
                                            keyPath: string | string[];
                                            unique: boolean;
                                            multi: boolean;
                                            auto: boolean;
                                            compound: boolean;
                                            src: string;
                                        }[];
                                        mappedClass: Function;
                                        idxByName: {
                                            [x: string]: {
                                                name: string;
                                                keyPath: string | string[];
                                                unique: boolean;
                                                multi: boolean;
                                                auto: boolean;
                                                compound: boolean;
                                                src: string;
                                            };
                                        };
                                        readHook?: (x: any) => any;
                                    };
                                    hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                                    core: {
                                        readonly name: string;
                                        readonly schema: {
                                            readonly name: string;
                                            readonly primaryKey: {
                                                readonly name: string;
                                                readonly isPrimaryKey?: boolean;
                                                readonly outbound?: boolean;
                                                readonly compound?: boolean;
                                                readonly keyPath: string | string[];
                                                readonly autoIncrement?: boolean;
                                                readonly unique?: boolean;
                                                readonly multiEntry?: boolean;
                                                readonly extractKey: (value: any) => any;
                                            };
                                            readonly indexes: {
                                                readonly name: string;
                                                readonly isPrimaryKey?: boolean;
                                                readonly outbound?: boolean;
                                                readonly compound?: boolean;
                                                readonly keyPath: string | string[];
                                                readonly autoIncrement?: boolean;
                                                readonly unique?: boolean;
                                                readonly multiEntry?: boolean;
                                                readonly extractKey: (value: any) => any;
                                            }[];
                                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                        };
                                        mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                        get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                        getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                        query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                        openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                        count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                                    };
                                    get: {
                                        (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                        <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                        (equalityCriterias: {
                                            [key: string]: any;
                                        }): import("dexie").PromiseExtended<any>;
                                        <R_1>(equalityCriterias: {
                                            [key: string]: any;
                                        }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                                    };
                                    where: {
                                        (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                        (equalityCriterias: {
                                            [key: string]: any;
                                        }): import("dexie").Collection<any, import("dexie").IndexableType>;
                                    };
                                    filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    count: {
                                        (): import("dexie").PromiseExtended<number>;
                                        <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                                    };
                                    offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    each: (callback: (obj: any, cursor: {
                                        key: any;
                                        primaryKey: import("dexie").IndexableType;
                                    }) => any) => import("dexie").PromiseExtended<void>;
                                    toArray: {
                                        (): import("dexie").PromiseExtended<any[]>;
                                        <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                                    };
                                    toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    mapToClass: (constructor: Function) => Function;
                                    add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                    update: (key: any, changes: {
                                        [keyPath: string]: any;
                                    }) => import("dexie").PromiseExtended<number>;
                                    put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                    delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                                    clear: () => import("dexie").PromiseExtended<void>;
                                    bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                                    bulkAdd: {
                                        <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                            allKeys: B;
                                        }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                        <B_1 extends boolean>(items: readonly any[], options: {
                                            allKeys: B_1;
                                        }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                        (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                            allKeys: boolean;
                                        }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                    };
                                    bulkPut: {
                                        <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                            allKeys: B_2;
                                        }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                        <B_3 extends boolean>(items: readonly any[], options: {
                                            allKeys: B_3;
                                        }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                        (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                            allKeys: boolean;
                                        }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                    };
                                    bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                                }[];
                                table: <T = any, TKey = any>(tableName: string) => import("dexie").Table<T, TKey>;
                                transaction: {
                                    <U>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U | PromiseLike<U>): import("dexie").PromiseExtended<U>;
                                    <U_1>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_1 | PromiseLike<U_1>): import("dexie").PromiseExtended<U_1>;
                                    <U_2>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_2 | PromiseLike<U_2>): import("dexie").PromiseExtended<U_2>;
                                    <U_3>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_3 | PromiseLike<U_3>): import("dexie").PromiseExtended<U_3>;
                                    <U_4>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_4 | PromiseLike<U_4>): import("dexie").PromiseExtended<U_4>;
                                    <U_5>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: () => U_5 | PromiseLike<U_5>): import("dexie").PromiseExtended<U_5>;
                                };
                            };
                            active: boolean;
                            mode: IDBTransactionMode;
                            storeNames: string[];
                            parent?: any;
                            on: import("dexie").TransactionEvents;
                            abort: () => void;
                            table: {
                                (tableName: string): import("dexie").Table<any, any>;
                                <T_2>(tableName: string): import("dexie").Table<T_2, any>;
                                <T_3, Key>(tableName: string): import("dexie").Table<T_3, Key>;
                            };
                        };
                    };
                    Collection: {
                        prototype: {
                            and: (filter: (x: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            clone: (props?: Object) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_10>(thenShortcut: import("dexie").ThenShortcut<number, R_10>): import("dexie").PromiseExtended<R_10>;
                            };
                            distinct: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: import("dexie").IndexableType;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            eachKey: (callback: (key: import("dexie").IndexableType, cursor: {
                                key: import("dexie").IndexableType;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            eachPrimaryKey: (callback: (key: import("dexie").IndexableType, cursor: {
                                key: import("dexie").IndexableType;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            eachUniqueKey: (callback: (key: import("dexie").IndexableType, cursor: {
                                key: import("dexie").IndexableType;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            filter: (filter: (x: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            first: {
                                (): import("dexie").PromiseExtended<any>;
                                <R_11>(thenShortcut: import("dexie").ThenShortcut<any, R_11>): import("dexie").PromiseExtended<R_11>;
                            };
                            keys: {
                                (): import("dexie").PromiseExtended<import("dexie").IndexableTypeArray>;
                                <R_12>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableTypeArray, R_12>): import("dexie").PromiseExtended<R_12>;
                            };
                            primaryKeys: {
                                (): import("dexie").PromiseExtended<import("dexie").IndexableType[]>;
                                <R_13>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableType[], R_13>): import("dexie").PromiseExtended<R_13>;
                            };
                            last: {
                                (): import("dexie").PromiseExtended<any>;
                                <R_14>(thenShortcut: import("dexie").ThenShortcut<any, R_14>): import("dexie").PromiseExtended<R_14>;
                            };
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            or: (indexOrPrimayKey: string) => import("dexie").WhereClause<any, import("dexie").IndexableType>;
                            raw: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            sortBy: {
                                (keyPath: string): import("dexie").PromiseExtended<any[]>;
                                <R_15>(keyPath: string, thenShortcut: import("dexie").ThenShortcut<any[], R_15>): import("dexie").PromiseExtended<R_15>;
                            };
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_16>(thenShortcut: import("dexie").ThenShortcut<any[], R_16>): import("dexie").PromiseExtended<R_16>;
                            };
                            uniqueKeys: {
                                (): import("dexie").PromiseExtended<import("dexie").IndexableTypeArray>;
                                <R_17>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableTypeArray, R_17>): import("dexie").PromiseExtended<R_17>;
                            };
                            until: (filter: (value: any) => boolean, includeStopEntry?: boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            delete: () => import("dexie").PromiseExtended<number>;
                            modify: {
                                (changeCallback: (obj: any, ctx: {
                                    value: any;
                                }) => boolean | void): import("dexie").PromiseExtended<number>;
                                (changes: {
                                    [keyPath: string]: any;
                                }): import("dexie").PromiseExtended<number>;
                            };
                        };
                    };
                };
                readonly _allTables: {
                    [x: string]: {
                        db: any;
                        name: string;
                        schema: {
                            name: string;
                            primKey: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                            indexes: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            }[];
                            mappedClass: Function;
                            idxByName: {
                                [x: string]: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                            };
                            readHook?: (x: any) => any;
                        };
                        hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                        core: {
                            readonly name: string;
                            readonly schema: {
                                readonly name: string;
                                readonly primaryKey: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                };
                                readonly indexes: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                }[];
                                readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                            };
                            mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                            get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                            getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                            query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                            openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                            count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                        };
                        get: {
                            (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                            <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").PromiseExtended<any>;
                            <R_1>(equalityCriterias: {
                                [key: string]: any;
                            }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                        };
                        where: {
                            (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        count: {
                            (): import("dexie").PromiseExtended<number>;
                            <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                        };
                        offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        each: (callback: (obj: any, cursor: {
                            key: any;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        toArray: {
                            (): import("dexie").PromiseExtended<any[]>;
                            <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                        };
                        toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        mapToClass: (constructor: Function) => Function;
                        add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        update: (key: any, changes: {
                            [keyPath: string]: any;
                        }) => import("dexie").PromiseExtended<number>;
                        put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                        clear: () => import("dexie").PromiseExtended<void>;
                        bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                        bulkAdd: {
                            <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B;
                            }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_1 extends boolean>(items: readonly any[], options: {
                                allKeys: B_1;
                            }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkPut: {
                            <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B_2;
                            }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_3 extends boolean>(items: readonly any[], options: {
                                allKeys: B_3;
                            }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                    };
                };
                readonly core: {
                    stack: "dbcore";
                    transaction: (stores: string[], mode: "readonly" | "readwrite", options?: import("dexie").DbCoreTransactionOptions) => import("dexie").DBCoreTransaction;
                    readonly MIN_KEY: any;
                    readonly MAX_KEY: any;
                    readonly schema: {
                        name: string;
                        tables: {
                            readonly name: string;
                            readonly primaryKey: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            };
                            readonly indexes: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            }[];
                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                        }[];
                    };
                    table: (name: string) => import("dexie").DBCoreTable;
                };
                _createTransaction: (this: import("dexie").Dexie, mode: IDBTransactionMode, storeNames: ArrayLike<string>, dbschema: import("dexie").DbSchema, parentTransaction?: import("dexie").Transaction) => import("dexie").Transaction;
                _dbSchema: {
                    [x: string]: {
                        name: string;
                        primKey: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        };
                        indexes: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        }[];
                        mappedClass: Function;
                        idxByName: {
                            [x: string]: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                        };
                        readHook?: (x: any) => any;
                    };
                };
                version: (versionNumber: number) => import("dexie").Version;
                on: import("dexie").DbEvents;
                open: () => import("dexie").PromiseExtended<import("dexie").Dexie>;
                table: <T_1 = any, TKey_1 = import("dexie").IndexableType>(tableName: string) => import("dexie").Table<T_1, TKey_1>;
                transaction: {
                    <U_18>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_18 | PromiseLike<U_18>): import("dexie").PromiseExtended<U_18>;
                    <U_19>(mode: import("dexie").TransactionMode, table: string, scope: (trans: import("dexie").Transaction) => U_19 | PromiseLike<U_19>): import("dexie").PromiseExtended<U_19>;
                    <U_20>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_20 | PromiseLike<U_20>): import("dexie").PromiseExtended<U_20>;
                    <U_21>(mode: import("dexie").TransactionMode, table: string, table2: string, scope: (trans: import("dexie").Transaction) => U_21 | PromiseLike<U_21>): import("dexie").PromiseExtended<U_21>;
                    <U_22>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_22 | PromiseLike<U_22>): import("dexie").PromiseExtended<U_22>;
                    <U_23>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, scope: (trans: import("dexie").Transaction) => U_23 | PromiseLike<U_23>): import("dexie").PromiseExtended<U_23>;
                    <U_24>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_24 | PromiseLike<U_24>): import("dexie").PromiseExtended<U_24>;
                    <U_25>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, table4: string, scope: (trans: import("dexie").Transaction) => U_25 | PromiseLike<U_25>): import("dexie").PromiseExtended<U_25>;
                    <U_26>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_26 | PromiseLike<U_26>): import("dexie").PromiseExtended<U_26>;
                    <U_27>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, table4: string, table5: string, scope: (trans: import("dexie").Transaction) => U_27 | PromiseLike<U_27>): import("dexie").PromiseExtended<U_27>;
                    <U_28>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: (trans: import("dexie").Transaction) => U_28 | PromiseLike<U_28>): import("dexie").PromiseExtended<U_28>;
                    <U_29>(mode: import("dexie").TransactionMode, tables: string[], scope: (trans: import("dexie").Transaction) => U_29 | PromiseLike<U_29>): import("dexie").PromiseExtended<U_29>;
                };
                close: () => void;
                delete: () => import("dexie").PromiseExtended<void>;
                isOpen: () => boolean;
                hasBeenClosed: () => boolean;
                hasFailed: () => boolean;
                dynamicallyOpened: () => boolean;
                backendDB: () => IDBDatabase;
                use: (middleware: import("dexie").Middleware<import("dexie").DBCore>) => import("../../../core/IndexDB").default;
                unuse: {
                    ({ stack, create }: import("dexie").Middleware<{
                        stack: "dbcore";
                    }>): import("../../../core/IndexDB").default;
                    ({ stack, name }: {
                        stack: "dbcore";
                        name: string;
                    }): import("../../../core/IndexDB").default;
                };
                Table: {
                    prototype: {
                        db: any;
                        name: string;
                        schema: {
                            name: string;
                            primKey: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                            indexes: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            }[];
                            mappedClass: Function;
                            idxByName: {
                                [x: string]: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                            };
                            readHook?: (x: any) => any;
                        };
                        hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                        core: {
                            readonly name: string;
                            readonly schema: {
                                readonly name: string;
                                readonly primaryKey: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                };
                                readonly indexes: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                }[];
                                readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                            };
                            mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                            get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                            getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                            query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                            openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                            count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                        };
                        get: {
                            (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                            <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").PromiseExtended<any>;
                            <R_1>(equalityCriterias: {
                                [key: string]: any;
                            }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                        };
                        where: {
                            (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        count: {
                            (): import("dexie").PromiseExtended<number>;
                            <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                        };
                        offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        each: (callback: (obj: any, cursor: {
                            key: any;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        toArray: {
                            (): import("dexie").PromiseExtended<any[]>;
                            <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                        };
                        toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        mapToClass: (constructor: Function) => Function;
                        add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        update: (key: any, changes: {
                            [keyPath: string]: any;
                        }) => import("dexie").PromiseExtended<number>;
                        put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                        clear: () => import("dexie").PromiseExtended<void>;
                        bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                        bulkAdd: {
                            <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B;
                            }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_1 extends boolean>(items: readonly any[], options: {
                                allKeys: B_1;
                            }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkPut: {
                            <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B_2;
                            }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_3 extends boolean>(items: readonly any[], options: {
                                allKeys: B_3;
                            }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                    };
                };
                WhereClause: {
                    prototype: {
                        above: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        aboveOrEqual: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        anyOf: {
                            (keys: readonly import("dexie").IndexableType[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            (...keys: import("dexie").IndexableType[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        anyOfIgnoreCase: {
                            (keys: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            (...keys: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        below: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        belowOrEqual: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        between: (lower: any, upper: any, includeLower?: boolean, includeUpper?: boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        equals: (key: import("dexie").IndexableType) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        equalsIgnoreCase: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        inAnyRange: (ranges: readonly {
                            0: any;
                            1: any;
                        }[], options?: {
                            includeLowers?: boolean;
                            includeUppers?: boolean;
                        }) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        startsWith: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        startsWithAnyOf: {
                            (prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            (...prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        startsWithIgnoreCase: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        startsWithAnyOfIgnoreCase: {
                            (prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            (...prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        noneOf: (keys: readonly import("dexie").IndexableType[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        notEqual: (key: import("dexie").IndexableType) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    };
                };
                Version: {
                    prototype: {
                        stores: (schema: {
                            [tableName: string]: string;
                        }) => import("dexie").Version;
                        upgrade: (fn: (trans: import("dexie").Transaction) => void | PromiseLike<any>) => import("dexie").Version;
                    };
                };
                Transaction: {
                    prototype: {
                        db: {
                            readonly name: string;
                            readonly tables: {
                                db: any;
                                name: string;
                                schema: {
                                    name: string;
                                    primKey: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                    indexes: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    }[];
                                    mappedClass: Function;
                                    idxByName: {
                                        [x: string]: {
                                            name: string;
                                            keyPath: string | string[];
                                            unique: boolean;
                                            multi: boolean;
                                            auto: boolean;
                                            compound: boolean;
                                            src: string;
                                        };
                                    };
                                    readHook?: (x: any) => any;
                                };
                                hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                                core: {
                                    readonly name: string;
                                    readonly schema: {
                                        readonly name: string;
                                        readonly primaryKey: {
                                            readonly name: string;
                                            readonly isPrimaryKey?: boolean;
                                            readonly outbound?: boolean;
                                            readonly compound?: boolean;
                                            readonly keyPath: string | string[];
                                            readonly autoIncrement?: boolean;
                                            readonly unique?: boolean;
                                            readonly multiEntry?: boolean;
                                            readonly extractKey: (value: any) => any;
                                        };
                                        readonly indexes: {
                                            readonly name: string;
                                            readonly isPrimaryKey?: boolean;
                                            readonly outbound?: boolean;
                                            readonly compound?: boolean;
                                            readonly keyPath: string | string[];
                                            readonly autoIncrement?: boolean;
                                            readonly unique?: boolean;
                                            readonly multiEntry?: boolean;
                                            readonly extractKey: (value: any) => any;
                                        }[];
                                        readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                    };
                                    mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                    get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                    getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                    query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                    openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                    count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                                };
                                get: {
                                    (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                    <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                    (equalityCriterias: {
                                        [key: string]: any;
                                    }): import("dexie").PromiseExtended<any>;
                                    <R_1>(equalityCriterias: {
                                        [key: string]: any;
                                    }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                                };
                                where: {
                                    (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                    (equalityCriterias: {
                                        [key: string]: any;
                                    }): import("dexie").Collection<any, import("dexie").IndexableType>;
                                };
                                filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                count: {
                                    (): import("dexie").PromiseExtended<number>;
                                    <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                                };
                                offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                each: (callback: (obj: any, cursor: {
                                    key: any;
                                    primaryKey: import("dexie").IndexableType;
                                }) => any) => import("dexie").PromiseExtended<void>;
                                toArray: {
                                    (): import("dexie").PromiseExtended<any[]>;
                                    <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                                };
                                toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                                orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                                mapToClass: (constructor: Function) => Function;
                                add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                update: (key: any, changes: {
                                    [keyPath: string]: any;
                                }) => import("dexie").PromiseExtended<number>;
                                put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                                clear: () => import("dexie").PromiseExtended<void>;
                                bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                                bulkAdd: {
                                    <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                        allKeys: B;
                                    }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                    <B_1 extends boolean>(items: readonly any[], options: {
                                        allKeys: B_1;
                                    }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                    (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                        allKeys: boolean;
                                    }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                };
                                bulkPut: {
                                    <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                        allKeys: B_2;
                                    }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                    <B_3 extends boolean>(items: readonly any[], options: {
                                        allKeys: B_3;
                                    }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                    (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                        allKeys: boolean;
                                    }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                };
                                bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                            }[];
                            table: <T = any, TKey = any>(tableName: string) => import("dexie").Table<T, TKey>;
                            transaction: {
                                <U>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U | PromiseLike<U>): import("dexie").PromiseExtended<U>;
                                <U_1>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_1 | PromiseLike<U_1>): import("dexie").PromiseExtended<U_1>;
                                <U_2>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_2 | PromiseLike<U_2>): import("dexie").PromiseExtended<U_2>;
                                <U_3>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_3 | PromiseLike<U_3>): import("dexie").PromiseExtended<U_3>;
                                <U_4>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_4 | PromiseLike<U_4>): import("dexie").PromiseExtended<U_4>;
                                <U_5>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: () => U_5 | PromiseLike<U_5>): import("dexie").PromiseExtended<U_5>;
                            };
                        };
                        active: boolean;
                        mode: IDBTransactionMode;
                        storeNames: string[];
                        parent?: any;
                        on: import("dexie").TransactionEvents;
                        abort: () => void;
                        table: {
                            (tableName: string): import("dexie").Table<any, any>;
                            <T_2>(tableName: string): import("dexie").Table<T_2, any>;
                            <T_3, Key>(tableName: string): import("dexie").Table<T_3, Key>;
                        };
                    };
                };
                Collection: {
                    prototype: {
                        and: (filter: (x: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        clone: (props?: Object) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        count: {
                            (): import("dexie").PromiseExtended<number>;
                            <R_10>(thenShortcut: import("dexie").ThenShortcut<number, R_10>): import("dexie").PromiseExtended<R_10>;
                        };
                        distinct: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        each: (callback: (obj: any, cursor: {
                            key: import("dexie").IndexableType;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        eachKey: (callback: (key: import("dexie").IndexableType, cursor: {
                            key: import("dexie").IndexableType;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        eachPrimaryKey: (callback: (key: import("dexie").IndexableType, cursor: {
                            key: import("dexie").IndexableType;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        eachUniqueKey: (callback: (key: import("dexie").IndexableType, cursor: {
                            key: import("dexie").IndexableType;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        filter: (filter: (x: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        first: {
                            (): import("dexie").PromiseExtended<any>;
                            <R_11>(thenShortcut: import("dexie").ThenShortcut<any, R_11>): import("dexie").PromiseExtended<R_11>;
                        };
                        keys: {
                            (): import("dexie").PromiseExtended<import("dexie").IndexableTypeArray>;
                            <R_12>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableTypeArray, R_12>): import("dexie").PromiseExtended<R_12>;
                        };
                        primaryKeys: {
                            (): import("dexie").PromiseExtended<import("dexie").IndexableType[]>;
                            <R_13>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableType[], R_13>): import("dexie").PromiseExtended<R_13>;
                        };
                        last: {
                            (): import("dexie").PromiseExtended<any>;
                            <R_14>(thenShortcut: import("dexie").ThenShortcut<any, R_14>): import("dexie").PromiseExtended<R_14>;
                        };
                        limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        or: (indexOrPrimayKey: string) => import("dexie").WhereClause<any, import("dexie").IndexableType>;
                        raw: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        sortBy: {
                            (keyPath: string): import("dexie").PromiseExtended<any[]>;
                            <R_15>(keyPath: string, thenShortcut: import("dexie").ThenShortcut<any[], R_15>): import("dexie").PromiseExtended<R_15>;
                        };
                        toArray: {
                            (): import("dexie").PromiseExtended<any[]>;
                            <R_16>(thenShortcut: import("dexie").ThenShortcut<any[], R_16>): import("dexie").PromiseExtended<R_16>;
                        };
                        uniqueKeys: {
                            (): import("dexie").PromiseExtended<import("dexie").IndexableTypeArray>;
                            <R_17>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableTypeArray, R_17>): import("dexie").PromiseExtended<R_17>;
                        };
                        until: (filter: (value: any) => boolean, includeStopEntry?: boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        delete: () => import("dexie").PromiseExtended<number>;
                        modify: {
                            (changeCallback: (obj: any, ctx: {
                                value: any;
                            }) => boolean | void): import("dexie").PromiseExtended<number>;
                            (changes: {
                                [keyPath: string]: any;
                            }): import("dexie").PromiseExtended<number>;
                        };
                    };
                };
            };
            expirationTime: number;
        };
        imageCache: {
            add: (name: string, url: any) => void;
            get: (name: string) => Promise<string>;
            db: {
                imageCache: {
                    db: {
                        readonly name: string;
                        readonly tables: {
                            db: any;
                            name: string;
                            schema: {
                                name: string;
                                primKey: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                                indexes: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                }[];
                                mappedClass: Function;
                                idxByName: {
                                    [x: string]: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                };
                                readHook?: (x: any) => any;
                            };
                            hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                            core: {
                                readonly name: string;
                                readonly schema: {
                                    readonly name: string;
                                    readonly primaryKey: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    };
                                    readonly indexes: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    }[];
                                    readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                };
                                mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                            };
                            get: {
                                (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").PromiseExtended<any>;
                                <R_1>(equalityCriterias: {
                                    [key: string]: any;
                                }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                            };
                            where: {
                                (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                            };
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: any;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                            };
                            toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            mapToClass: (constructor: Function) => Function;
                            add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            update: (key: any, changes: {
                                [keyPath: string]: any;
                            }) => import("dexie").PromiseExtended<number>;
                            put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                            clear: () => import("dexie").PromiseExtended<void>;
                            bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                            bulkAdd: {
                                <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B;
                                }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_1 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_1;
                                }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkPut: {
                                <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B_2;
                                }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_3 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_3;
                                }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                        }[];
                        table: <T = any, TKey = any>(tableName: string) => import("dexie").Table<T, TKey>;
                        transaction: {
                            <U>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U | PromiseLike<U>): import("dexie").PromiseExtended<U>;
                            <U_1>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_1 | PromiseLike<U_1>): import("dexie").PromiseExtended<U_1>;
                            <U_2>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_2 | PromiseLike<U_2>): import("dexie").PromiseExtended<U_2>;
                            <U_3>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_3 | PromiseLike<U_3>): import("dexie").PromiseExtended<U_3>;
                            <U_4>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_4 | PromiseLike<U_4>): import("dexie").PromiseExtended<U_4>;
                            <U_5>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: () => U_5 | PromiseLike<U_5>): import("dexie").PromiseExtended<U_5>;
                        };
                    };
                    name: string;
                    schema: {
                        name: string;
                        primKey: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        };
                        indexes: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        }[];
                        mappedClass: Function;
                        idxByName: {
                            [x: string]: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                        };
                        readHook?: (x: any) => any;
                    };
                    hook: import("dexie").TableHooks<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    core: {
                        readonly name: string;
                        readonly schema: {
                            readonly name: string;
                            readonly primaryKey: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            };
                            readonly indexes: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            }[];
                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                        };
                        mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                        get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                        getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                        query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                        openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                        count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                    };
                    get: {
                        (key: number): import("dexie").PromiseExtended<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }>;
                        <R_4>(key: number, thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }, R_4>): import("dexie").PromiseExtended<R_4>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").PromiseExtended<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }>;
                        <R_5>(equalityCriterias: {
                            [key: string]: any;
                        }, thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }, R_5>): import("dexie").PromiseExtended<R_5>;
                    };
                    where: {
                        (index: string | string[]): import("dexie").WhereClause<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }, number>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").Collection<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }, number>;
                    };
                    filter: (fn: (obj: {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }) => boolean) => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    count: {
                        (): import("dexie").PromiseExtended<number>;
                        <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                    };
                    offset: (n: number) => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    limit: (n: number) => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    each: (callback: (obj: {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, cursor: {
                        key: any;
                        primaryKey: number;
                    }) => any) => import("dexie").PromiseExtended<void>;
                    toArray: {
                        (): import("dexie").PromiseExtended<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[]>;
                        <R_6>(thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], R_6>): import("dexie").PromiseExtended<R_6>;
                    };
                    toCollection: () => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    orderBy: (index: string | string[]) => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    reverse: () => import("dexie").Collection<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, number>;
                    mapToClass: (constructor: Function) => Function;
                    add: (item: {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, key?: number) => import("dexie").PromiseExtended<number>;
                    update: (key: number | {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, changes: {
                        [keyPath: string]: any;
                    }) => import("dexie").PromiseExtended<number>;
                    put: (item: {
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }, key?: number) => import("dexie").PromiseExtended<number>;
                    delete: (key: number) => import("dexie").PromiseExtended<void>;
                    clear: () => import("dexie").PromiseExtended<void>;
                    bulkGet: (keys: number[]) => import("dexie").PromiseExtended<{
                        id?: number;
                        picture?: Blob;
                        name?: string;
                    }[]>;
                    bulkAdd: {
                        <B_4 extends boolean>(items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_4;
                        }): import("dexie").PromiseExtended<B_4 extends true ? number[] : number>;
                        <B_5 extends boolean>(items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], options: {
                            allKeys: B_5;
                        }): import("dexie").PromiseExtended<B_5 extends true ? number[] : number>;
                        (items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<number>;
                    };
                    bulkPut: {
                        <B_6 extends boolean>(items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_6;
                        }): import("dexie").PromiseExtended<B_6 extends true ? number[] : number>;
                        <B_7 extends boolean>(items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], options: {
                            allKeys: B_7;
                        }): import("dexie").PromiseExtended<B_7 extends true ? number[] : number>;
                        (items: readonly {
                            id?: number;
                            picture?: Blob;
                            name?: string;
                        }[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<number>;
                    };
                    bulkDelete: (keys: number[]) => import("dexie").PromiseExtended<void>;
                };
                screenCache: {
                    db: {
                        readonly name: string;
                        readonly tables: {
                            db: any;
                            name: string;
                            schema: {
                                name: string;
                                primKey: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                                indexes: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                }[];
                                mappedClass: Function;
                                idxByName: {
                                    [x: string]: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                };
                                readHook?: (x: any) => any;
                            };
                            hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                            core: {
                                readonly name: string;
                                readonly schema: {
                                    readonly name: string;
                                    readonly primaryKey: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    };
                                    readonly indexes: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    }[];
                                    readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                };
                                mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                            };
                            get: {
                                (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").PromiseExtended<any>;
                                <R_1>(equalityCriterias: {
                                    [key: string]: any;
                                }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                            };
                            where: {
                                (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                            };
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: any;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                            };
                            toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            mapToClass: (constructor: Function) => Function;
                            add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            update: (key: any, changes: {
                                [keyPath: string]: any;
                            }) => import("dexie").PromiseExtended<number>;
                            put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                            clear: () => import("dexie").PromiseExtended<void>;
                            bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                            bulkAdd: {
                                <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B;
                                }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_1 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_1;
                                }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkPut: {
                                <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B_2;
                                }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_3 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_3;
                                }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                        }[];
                        table: <T = any, TKey = any>(tableName: string) => import("dexie").Table<T, TKey>;
                        transaction: {
                            <U>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U | PromiseLike<U>): import("dexie").PromiseExtended<U>;
                            <U_1>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_1 | PromiseLike<U_1>): import("dexie").PromiseExtended<U_1>;
                            <U_2>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_2 | PromiseLike<U_2>): import("dexie").PromiseExtended<U_2>;
                            <U_3>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_3 | PromiseLike<U_3>): import("dexie").PromiseExtended<U_3>;
                            <U_4>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_4 | PromiseLike<U_4>): import("dexie").PromiseExtended<U_4>;
                            <U_5>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: () => U_5 | PromiseLike<U_5>): import("dexie").PromiseExtended<U_5>;
                        };
                    };
                    name: string;
                    schema: {
                        name: string;
                        primKey: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        };
                        indexes: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        }[];
                        mappedClass: Function;
                        idxByName: {
                            [x: string]: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                        };
                        readHook?: (x: any) => any;
                    };
                    hook: import("dexie").TableHooks<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    core: {
                        readonly name: string;
                        readonly schema: {
                            readonly name: string;
                            readonly primaryKey: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            };
                            readonly indexes: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            }[];
                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                        };
                        mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                        get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                        getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                        query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                        openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                        count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                    };
                    get: {
                        (key: number): import("dexie").PromiseExtended<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }>;
                        <R_7>(key: number, thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }, R_7>): import("dexie").PromiseExtended<R_7>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").PromiseExtended<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }>;
                        <R_8>(equalityCriterias: {
                            [key: string]: any;
                        }, thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }, R_8>): import("dexie").PromiseExtended<R_8>;
                    };
                    where: {
                        (index: string | string[]): import("dexie").WhereClause<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }, number>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").Collection<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }, number>;
                    };
                    filter: (fn: (obj: {
                        id?: number;
                        data?: string;
                        name?: string;
                    }) => boolean) => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    count: {
                        (): import("dexie").PromiseExtended<number>;
                        <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                    };
                    offset: (n: number) => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    limit: (n: number) => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    each: (callback: (obj: {
                        id?: number;
                        data?: string;
                        name?: string;
                    }, cursor: {
                        key: any;
                        primaryKey: number;
                    }) => any) => import("dexie").PromiseExtended<void>;
                    toArray: {
                        (): import("dexie").PromiseExtended<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }[]>;
                        <R_9>(thenShortcut: import("dexie").ThenShortcut<{
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], R_9>): import("dexie").PromiseExtended<R_9>;
                    };
                    toCollection: () => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    orderBy: (index: string | string[]) => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    reverse: () => import("dexie").Collection<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }, number>;
                    mapToClass: (constructor: Function) => Function;
                    add: (item: {
                        id?: number;
                        data?: string;
                        name?: string;
                    }, key?: number) => import("dexie").PromiseExtended<number>;
                    update: (key: number | {
                        id?: number;
                        data?: string;
                        name?: string;
                    }, changes: {
                        [keyPath: string]: any;
                    }) => import("dexie").PromiseExtended<number>;
                    put: (item: {
                        id?: number;
                        data?: string;
                        name?: string;
                    }, key?: number) => import("dexie").PromiseExtended<number>;
                    delete: (key: number) => import("dexie").PromiseExtended<void>;
                    clear: () => import("dexie").PromiseExtended<void>;
                    bulkGet: (keys: number[]) => import("dexie").PromiseExtended<{
                        id?: number;
                        data?: string;
                        name?: string;
                    }[]>;
                    bulkAdd: {
                        <B_8 extends boolean>(items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_8;
                        }): import("dexie").PromiseExtended<B_8 extends true ? number[] : number>;
                        <B_9 extends boolean>(items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], options: {
                            allKeys: B_9;
                        }): import("dexie").PromiseExtended<B_9 extends true ? number[] : number>;
                        (items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<number>;
                    };
                    bulkPut: {
                        <B_10 extends boolean>(items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_10;
                        }): import("dexie").PromiseExtended<B_10 extends true ? number[] : number>;
                        <B_11 extends boolean>(items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], options: {
                            allKeys: B_11;
                        }): import("dexie").PromiseExtended<B_11 extends true ? number[] : number>;
                        (items: readonly {
                            id?: number;
                            data?: string;
                            name?: string;
                        }[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<number>;
                    };
                    bulkDelete: (keys: number[]) => import("dexie").PromiseExtended<void>;
                };
                readonly name: string;
                readonly tables: {
                    db: any;
                    name: string;
                    schema: {
                        name: string;
                        primKey: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        };
                        indexes: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        }[];
                        mappedClass: Function;
                        idxByName: {
                            [x: string]: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                        };
                        readHook?: (x: any) => any;
                    };
                    hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                    core: {
                        readonly name: string;
                        readonly schema: {
                            readonly name: string;
                            readonly primaryKey: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            };
                            readonly indexes: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            }[];
                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                        };
                        mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                        get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                        getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                        query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                        openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                        count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                    };
                    get: {
                        (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                        <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").PromiseExtended<any>;
                        <R_1>(equalityCriterias: {
                            [key: string]: any;
                        }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                    };
                    where: {
                        (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                        (equalityCriterias: {
                            [key: string]: any;
                        }): import("dexie").Collection<any, import("dexie").IndexableType>;
                    };
                    filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    count: {
                        (): import("dexie").PromiseExtended<number>;
                        <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                    };
                    offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    each: (callback: (obj: any, cursor: {
                        key: any;
                        primaryKey: import("dexie").IndexableType;
                    }) => any) => import("dexie").PromiseExtended<void>;
                    toArray: {
                        (): import("dexie").PromiseExtended<any[]>;
                        <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                    };
                    toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                    orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                    mapToClass: (constructor: Function) => Function;
                    add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                    update: (key: any, changes: {
                        [keyPath: string]: any;
                    }) => import("dexie").PromiseExtended<number>;
                    put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                    delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                    clear: () => import("dexie").PromiseExtended<void>;
                    bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                    bulkAdd: {
                        <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B;
                        }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                        <B_1 extends boolean>(items: readonly any[], options: {
                            allKeys: B_1;
                        }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                        (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                    };
                    bulkPut: {
                        <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                            allKeys: B_2;
                        }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                        <B_3 extends boolean>(items: readonly any[], options: {
                            allKeys: B_3;
                        }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                        (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                            allKeys: boolean;
                        }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                    };
                    bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                }[];
                readonly verno: number;
                readonly vip: {
                    readonly name: string;
                    readonly tables: {
                        db: any;
                        name: string;
                        schema: {
                            name: string;
                            primKey: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                            indexes: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            }[];
                            mappedClass: Function;
                            idxByName: {
                                [x: string]: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                            };
                            readHook?: (x: any) => any;
                        };
                        hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                        core: {
                            readonly name: string;
                            readonly schema: {
                                readonly name: string;
                                readonly primaryKey: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                };
                                readonly indexes: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                }[];
                                readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                            };
                            mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                            get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                            getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                            query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                            openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                            count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                        };
                        get: {
                            (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                            <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").PromiseExtended<any>;
                            <R_1>(equalityCriterias: {
                                [key: string]: any;
                            }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                        };
                        where: {
                            (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        count: {
                            (): import("dexie").PromiseExtended<number>;
                            <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                        };
                        offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        each: (callback: (obj: any, cursor: {
                            key: any;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        toArray: {
                            (): import("dexie").PromiseExtended<any[]>;
                            <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                        };
                        toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        mapToClass: (constructor: Function) => Function;
                        add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        update: (key: any, changes: {
                            [keyPath: string]: any;
                        }) => import("dexie").PromiseExtended<number>;
                        put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                        clear: () => import("dexie").PromiseExtended<void>;
                        bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                        bulkAdd: {
                            <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B;
                            }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_1 extends boolean>(items: readonly any[], options: {
                                allKeys: B_1;
                            }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkPut: {
                            <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B_2;
                            }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_3 extends boolean>(items: readonly any[], options: {
                                allKeys: B_3;
                            }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                    }[];
                    readonly verno: number;
                    readonly vip: any;
                    readonly _allTables: {
                        [x: string]: {
                            db: any;
                            name: string;
                            schema: {
                                name: string;
                                primKey: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                                indexes: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                }[];
                                mappedClass: Function;
                                idxByName: {
                                    [x: string]: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                };
                                readHook?: (x: any) => any;
                            };
                            hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                            core: {
                                readonly name: string;
                                readonly schema: {
                                    readonly name: string;
                                    readonly primaryKey: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    };
                                    readonly indexes: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    }[];
                                    readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                };
                                mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                            };
                            get: {
                                (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").PromiseExtended<any>;
                                <R_1>(equalityCriterias: {
                                    [key: string]: any;
                                }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                            };
                            where: {
                                (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                            };
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: any;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                            };
                            toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            mapToClass: (constructor: Function) => Function;
                            add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            update: (key: any, changes: {
                                [keyPath: string]: any;
                            }) => import("dexie").PromiseExtended<number>;
                            put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                            clear: () => import("dexie").PromiseExtended<void>;
                            bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                            bulkAdd: {
                                <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B;
                                }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_1 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_1;
                                }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkPut: {
                                <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B_2;
                                }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_3 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_3;
                                }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                        };
                    };
                    readonly core: {
                        stack: "dbcore";
                        transaction: (stores: string[], mode: "readonly" | "readwrite", options?: import("dexie").DbCoreTransactionOptions) => import("dexie").DBCoreTransaction;
                        readonly MIN_KEY: any;
                        readonly MAX_KEY: any;
                        readonly schema: {
                            name: string;
                            tables: {
                                readonly name: string;
                                readonly primaryKey: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                };
                                readonly indexes: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                }[];
                                readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                            }[];
                        };
                        table: (name: string) => import("dexie").DBCoreTable;
                    };
                    _createTransaction: (this: import("dexie").Dexie, mode: IDBTransactionMode, storeNames: ArrayLike<string>, dbschema: import("dexie").DbSchema, parentTransaction?: import("dexie").Transaction) => import("dexie").Transaction;
                    _dbSchema: {
                        [x: string]: {
                            name: string;
                            primKey: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                            indexes: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            }[];
                            mappedClass: Function;
                            idxByName: {
                                [x: string]: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                            };
                            readHook?: (x: any) => any;
                        };
                    };
                    version: (versionNumber: number) => import("dexie").Version;
                    on: import("dexie").DbEvents;
                    open: () => import("dexie").PromiseExtended<import("dexie").Dexie>;
                    table: <T_1 = any, TKey_1 = import("dexie").IndexableType>(tableName: string) => import("dexie").Table<T_1, TKey_1>;
                    transaction: {
                        <U_6>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_6 | PromiseLike<U_6>): import("dexie").PromiseExtended<U_6>;
                        <U_7>(mode: import("dexie").TransactionMode, table: string, scope: (trans: import("dexie").Transaction) => U_7 | PromiseLike<U_7>): import("dexie").PromiseExtended<U_7>;
                        <U_8>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_8 | PromiseLike<U_8>): import("dexie").PromiseExtended<U_8>;
                        <U_9>(mode: import("dexie").TransactionMode, table: string, table2: string, scope: (trans: import("dexie").Transaction) => U_9 | PromiseLike<U_9>): import("dexie").PromiseExtended<U_9>;
                        <U_10>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_10 | PromiseLike<U_10>): import("dexie").PromiseExtended<U_10>;
                        <U_11>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, scope: (trans: import("dexie").Transaction) => U_11 | PromiseLike<U_11>): import("dexie").PromiseExtended<U_11>;
                        <U_12>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_12 | PromiseLike<U_12>): import("dexie").PromiseExtended<U_12>;
                        <U_13>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, table4: string, scope: (trans: import("dexie").Transaction) => U_13 | PromiseLike<U_13>): import("dexie").PromiseExtended<U_13>;
                        <U_14>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_14 | PromiseLike<U_14>): import("dexie").PromiseExtended<U_14>;
                        <U_15>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, table4: string, table5: string, scope: (trans: import("dexie").Transaction) => U_15 | PromiseLike<U_15>): import("dexie").PromiseExtended<U_15>;
                        <U_16>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: (trans: import("dexie").Transaction) => U_16 | PromiseLike<U_16>): import("dexie").PromiseExtended<U_16>;
                        <U_17>(mode: import("dexie").TransactionMode, tables: string[], scope: (trans: import("dexie").Transaction) => U_17 | PromiseLike<U_17>): import("dexie").PromiseExtended<U_17>;
                    };
                    close: () => void;
                    delete: () => import("dexie").PromiseExtended<void>;
                    isOpen: () => boolean;
                    hasBeenClosed: () => boolean;
                    hasFailed: () => boolean;
                    dynamicallyOpened: () => boolean;
                    backendDB: () => IDBDatabase;
                    use: (middleware: import("dexie").Middleware<import("dexie").DBCore>) => import("dexie").Dexie;
                    unuse: {
                        ({ stack, create }: import("dexie").Middleware<{
                            stack: "dbcore";
                        }>): import("dexie").Dexie;
                        ({ stack, name }: {
                            stack: "dbcore";
                            name: string;
                        }): import("dexie").Dexie;
                    };
                    Table: {
                        prototype: {
                            db: any;
                            name: string;
                            schema: {
                                name: string;
                                primKey: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                                indexes: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                }[];
                                mappedClass: Function;
                                idxByName: {
                                    [x: string]: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                };
                                readHook?: (x: any) => any;
                            };
                            hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                            core: {
                                readonly name: string;
                                readonly schema: {
                                    readonly name: string;
                                    readonly primaryKey: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    };
                                    readonly indexes: {
                                        readonly name: string;
                                        readonly isPrimaryKey?: boolean;
                                        readonly outbound?: boolean;
                                        readonly compound?: boolean;
                                        readonly keyPath: string | string[];
                                        readonly autoIncrement?: boolean;
                                        readonly unique?: boolean;
                                        readonly multiEntry?: boolean;
                                        readonly extractKey: (value: any) => any;
                                    }[];
                                    readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                };
                                mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                            };
                            get: {
                                (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").PromiseExtended<any>;
                                <R_1>(equalityCriterias: {
                                    [key: string]: any;
                                }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                            };
                            where: {
                                (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                (equalityCriterias: {
                                    [key: string]: any;
                                }): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                            };
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: any;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                            };
                            toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            mapToClass: (constructor: Function) => Function;
                            add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            update: (key: any, changes: {
                                [keyPath: string]: any;
                            }) => import("dexie").PromiseExtended<number>;
                            put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                            clear: () => import("dexie").PromiseExtended<void>;
                            bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                            bulkAdd: {
                                <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B;
                                }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_1 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_1;
                                }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkPut: {
                                <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                    allKeys: B_2;
                                }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                <B_3 extends boolean>(items: readonly any[], options: {
                                    allKeys: B_3;
                                }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                    allKeys: boolean;
                                }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                            };
                            bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                        };
                    };
                    WhereClause: {
                        prototype: {
                            above: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            aboveOrEqual: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            anyOf: {
                                (keys: readonly import("dexie").IndexableType[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                                (...keys: import("dexie").IndexableType[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            anyOfIgnoreCase: {
                                (keys: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                                (...keys: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            below: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            belowOrEqual: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            between: (lower: any, upper: any, includeLower?: boolean, includeUpper?: boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            equals: (key: import("dexie").IndexableType) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            equalsIgnoreCase: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            inAnyRange: (ranges: readonly {
                                0: any;
                                1: any;
                            }[], options?: {
                                includeLowers?: boolean;
                                includeUppers?: boolean;
                            }) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            startsWith: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            startsWithAnyOf: {
                                (prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                                (...prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            startsWithIgnoreCase: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            startsWithAnyOfIgnoreCase: {
                                (prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                                (...prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            };
                            noneOf: (keys: readonly import("dexie").IndexableType[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            notEqual: (key: import("dexie").IndexableType) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                    };
                    Version: {
                        prototype: {
                            stores: (schema: {
                                [tableName: string]: string;
                            }) => import("dexie").Version;
                            upgrade: (fn: (trans: import("dexie").Transaction) => void | PromiseLike<any>) => import("dexie").Version;
                        };
                    };
                    Transaction: {
                        prototype: {
                            db: {
                                readonly name: string;
                                readonly tables: {
                                    db: any;
                                    name: string;
                                    schema: {
                                        name: string;
                                        primKey: {
                                            name: string;
                                            keyPath: string | string[];
                                            unique: boolean;
                                            multi: boolean;
                                            auto: boolean;
                                            compound: boolean;
                                            src: string;
                                        };
                                        indexes: {
                                            name: string;
                                            keyPath: string | string[];
                                            unique: boolean;
                                            multi: boolean;
                                            auto: boolean;
                                            compound: boolean;
                                            src: string;
                                        }[];
                                        mappedClass: Function;
                                        idxByName: {
                                            [x: string]: {
                                                name: string;
                                                keyPath: string | string[];
                                                unique: boolean;
                                                multi: boolean;
                                                auto: boolean;
                                                compound: boolean;
                                                src: string;
                                            };
                                        };
                                        readHook?: (x: any) => any;
                                    };
                                    hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                                    core: {
                                        readonly name: string;
                                        readonly schema: {
                                            readonly name: string;
                                            readonly primaryKey: {
                                                readonly name: string;
                                                readonly isPrimaryKey?: boolean;
                                                readonly outbound?: boolean;
                                                readonly compound?: boolean;
                                                readonly keyPath: string | string[];
                                                readonly autoIncrement?: boolean;
                                                readonly unique?: boolean;
                                                readonly multiEntry?: boolean;
                                                readonly extractKey: (value: any) => any;
                                            };
                                            readonly indexes: {
                                                readonly name: string;
                                                readonly isPrimaryKey?: boolean;
                                                readonly outbound?: boolean;
                                                readonly compound?: boolean;
                                                readonly keyPath: string | string[];
                                                readonly autoIncrement?: boolean;
                                                readonly unique?: boolean;
                                                readonly multiEntry?: boolean;
                                                readonly extractKey: (value: any) => any;
                                            }[];
                                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                        };
                                        mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                        get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                        getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                        query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                        openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                        count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                                    };
                                    get: {
                                        (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                        <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                        (equalityCriterias: {
                                            [key: string]: any;
                                        }): import("dexie").PromiseExtended<any>;
                                        <R_1>(equalityCriterias: {
                                            [key: string]: any;
                                        }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                                    };
                                    where: {
                                        (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                        (equalityCriterias: {
                                            [key: string]: any;
                                        }): import("dexie").Collection<any, import("dexie").IndexableType>;
                                    };
                                    filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    count: {
                                        (): import("dexie").PromiseExtended<number>;
                                        <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                                    };
                                    offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    each: (callback: (obj: any, cursor: {
                                        key: any;
                                        primaryKey: import("dexie").IndexableType;
                                    }) => any) => import("dexie").PromiseExtended<void>;
                                    toArray: {
                                        (): import("dexie").PromiseExtended<any[]>;
                                        <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                                    };
                                    toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                                    mapToClass: (constructor: Function) => Function;
                                    add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                    update: (key: any, changes: {
                                        [keyPath: string]: any;
                                    }) => import("dexie").PromiseExtended<number>;
                                    put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                    delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                                    clear: () => import("dexie").PromiseExtended<void>;
                                    bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                                    bulkAdd: {
                                        <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                            allKeys: B;
                                        }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                        <B_1 extends boolean>(items: readonly any[], options: {
                                            allKeys: B_1;
                                        }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                        (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                            allKeys: boolean;
                                        }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                    };
                                    bulkPut: {
                                        <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                            allKeys: B_2;
                                        }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                        <B_3 extends boolean>(items: readonly any[], options: {
                                            allKeys: B_3;
                                        }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                        (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                            allKeys: boolean;
                                        }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                    };
                                    bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                                }[];
                                table: <T = any, TKey = any>(tableName: string) => import("dexie").Table<T, TKey>;
                                transaction: {
                                    <U>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U | PromiseLike<U>): import("dexie").PromiseExtended<U>;
                                    <U_1>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_1 | PromiseLike<U_1>): import("dexie").PromiseExtended<U_1>;
                                    <U_2>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_2 | PromiseLike<U_2>): import("dexie").PromiseExtended<U_2>;
                                    <U_3>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_3 | PromiseLike<U_3>): import("dexie").PromiseExtended<U_3>;
                                    <U_4>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_4 | PromiseLike<U_4>): import("dexie").PromiseExtended<U_4>;
                                    <U_5>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: () => U_5 | PromiseLike<U_5>): import("dexie").PromiseExtended<U_5>;
                                };
                            };
                            active: boolean;
                            mode: IDBTransactionMode;
                            storeNames: string[];
                            parent?: any;
                            on: import("dexie").TransactionEvents;
                            abort: () => void;
                            table: {
                                (tableName: string): import("dexie").Table<any, any>;
                                <T_2>(tableName: string): import("dexie").Table<T_2, any>;
                                <T_3, Key>(tableName: string): import("dexie").Table<T_3, Key>;
                            };
                        };
                    };
                    Collection: {
                        prototype: {
                            and: (filter: (x: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            clone: (props?: Object) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            count: {
                                (): import("dexie").PromiseExtended<number>;
                                <R_10>(thenShortcut: import("dexie").ThenShortcut<number, R_10>): import("dexie").PromiseExtended<R_10>;
                            };
                            distinct: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            each: (callback: (obj: any, cursor: {
                                key: import("dexie").IndexableType;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            eachKey: (callback: (key: import("dexie").IndexableType, cursor: {
                                key: import("dexie").IndexableType;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            eachPrimaryKey: (callback: (key: import("dexie").IndexableType, cursor: {
                                key: import("dexie").IndexableType;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            eachUniqueKey: (callback: (key: import("dexie").IndexableType, cursor: {
                                key: import("dexie").IndexableType;
                                primaryKey: import("dexie").IndexableType;
                            }) => any) => import("dexie").PromiseExtended<void>;
                            filter: (filter: (x: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            first: {
                                (): import("dexie").PromiseExtended<any>;
                                <R_11>(thenShortcut: import("dexie").ThenShortcut<any, R_11>): import("dexie").PromiseExtended<R_11>;
                            };
                            keys: {
                                (): import("dexie").PromiseExtended<import("dexie").IndexableTypeArray>;
                                <R_12>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableTypeArray, R_12>): import("dexie").PromiseExtended<R_12>;
                            };
                            primaryKeys: {
                                (): import("dexie").PromiseExtended<import("dexie").IndexableType[]>;
                                <R_13>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableType[], R_13>): import("dexie").PromiseExtended<R_13>;
                            };
                            last: {
                                (): import("dexie").PromiseExtended<any>;
                                <R_14>(thenShortcut: import("dexie").ThenShortcut<any, R_14>): import("dexie").PromiseExtended<R_14>;
                            };
                            limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            or: (indexOrPrimayKey: string) => import("dexie").WhereClause<any, import("dexie").IndexableType>;
                            raw: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                            sortBy: {
                                (keyPath: string): import("dexie").PromiseExtended<any[]>;
                                <R_15>(keyPath: string, thenShortcut: import("dexie").ThenShortcut<any[], R_15>): import("dexie").PromiseExtended<R_15>;
                            };
                            toArray: {
                                (): import("dexie").PromiseExtended<any[]>;
                                <R_16>(thenShortcut: import("dexie").ThenShortcut<any[], R_16>): import("dexie").PromiseExtended<R_16>;
                            };
                            uniqueKeys: {
                                (): import("dexie").PromiseExtended<import("dexie").IndexableTypeArray>;
                                <R_17>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableTypeArray, R_17>): import("dexie").PromiseExtended<R_17>;
                            };
                            until: (filter: (value: any) => boolean, includeStopEntry?: boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                            delete: () => import("dexie").PromiseExtended<number>;
                            modify: {
                                (changeCallback: (obj: any, ctx: {
                                    value: any;
                                }) => boolean | void): import("dexie").PromiseExtended<number>;
                                (changes: {
                                    [keyPath: string]: any;
                                }): import("dexie").PromiseExtended<number>;
                            };
                        };
                    };
                };
                readonly _allTables: {
                    [x: string]: {
                        db: any;
                        name: string;
                        schema: {
                            name: string;
                            primKey: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                            indexes: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            }[];
                            mappedClass: Function;
                            idxByName: {
                                [x: string]: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                            };
                            readHook?: (x: any) => any;
                        };
                        hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                        core: {
                            readonly name: string;
                            readonly schema: {
                                readonly name: string;
                                readonly primaryKey: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                };
                                readonly indexes: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                }[];
                                readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                            };
                            mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                            get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                            getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                            query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                            openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                            count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                        };
                        get: {
                            (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                            <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").PromiseExtended<any>;
                            <R_1>(equalityCriterias: {
                                [key: string]: any;
                            }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                        };
                        where: {
                            (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        count: {
                            (): import("dexie").PromiseExtended<number>;
                            <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                        };
                        offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        each: (callback: (obj: any, cursor: {
                            key: any;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        toArray: {
                            (): import("dexie").PromiseExtended<any[]>;
                            <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                        };
                        toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        mapToClass: (constructor: Function) => Function;
                        add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        update: (key: any, changes: {
                            [keyPath: string]: any;
                        }) => import("dexie").PromiseExtended<number>;
                        put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                        clear: () => import("dexie").PromiseExtended<void>;
                        bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                        bulkAdd: {
                            <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B;
                            }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_1 extends boolean>(items: readonly any[], options: {
                                allKeys: B_1;
                            }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkPut: {
                            <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B_2;
                            }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_3 extends boolean>(items: readonly any[], options: {
                                allKeys: B_3;
                            }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                    };
                };
                readonly core: {
                    stack: "dbcore";
                    transaction: (stores: string[], mode: "readonly" | "readwrite", options?: import("dexie").DbCoreTransactionOptions) => import("dexie").DBCoreTransaction;
                    readonly MIN_KEY: any;
                    readonly MAX_KEY: any;
                    readonly schema: {
                        name: string;
                        tables: {
                            readonly name: string;
                            readonly primaryKey: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            };
                            readonly indexes: {
                                readonly name: string;
                                readonly isPrimaryKey?: boolean;
                                readonly outbound?: boolean;
                                readonly compound?: boolean;
                                readonly keyPath: string | string[];
                                readonly autoIncrement?: boolean;
                                readonly unique?: boolean;
                                readonly multiEntry?: boolean;
                                readonly extractKey: (value: any) => any;
                            }[];
                            readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                        }[];
                    };
                    table: (name: string) => import("dexie").DBCoreTable;
                };
                _createTransaction: (this: import("dexie").Dexie, mode: IDBTransactionMode, storeNames: ArrayLike<string>, dbschema: import("dexie").DbSchema, parentTransaction?: import("dexie").Transaction) => import("dexie").Transaction;
                _dbSchema: {
                    [x: string]: {
                        name: string;
                        primKey: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        };
                        indexes: {
                            name: string;
                            keyPath: string | string[];
                            unique: boolean;
                            multi: boolean;
                            auto: boolean;
                            compound: boolean;
                            src: string;
                        }[];
                        mappedClass: Function;
                        idxByName: {
                            [x: string]: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                        };
                        readHook?: (x: any) => any;
                    };
                };
                version: (versionNumber: number) => import("dexie").Version;
                on: import("dexie").DbEvents;
                open: () => import("dexie").PromiseExtended<import("dexie").Dexie>;
                table: <T_1 = any, TKey_1 = import("dexie").IndexableType>(tableName: string) => import("dexie").Table<T_1, TKey_1>;
                transaction: {
                    <U_18>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_18 | PromiseLike<U_18>): import("dexie").PromiseExtended<U_18>;
                    <U_19>(mode: import("dexie").TransactionMode, table: string, scope: (trans: import("dexie").Transaction) => U_19 | PromiseLike<U_19>): import("dexie").PromiseExtended<U_19>;
                    <U_20>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_20 | PromiseLike<U_20>): import("dexie").PromiseExtended<U_20>;
                    <U_21>(mode: import("dexie").TransactionMode, table: string, table2: string, scope: (trans: import("dexie").Transaction) => U_21 | PromiseLike<U_21>): import("dexie").PromiseExtended<U_21>;
                    <U_22>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_22 | PromiseLike<U_22>): import("dexie").PromiseExtended<U_22>;
                    <U_23>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, scope: (trans: import("dexie").Transaction) => U_23 | PromiseLike<U_23>): import("dexie").PromiseExtended<U_23>;
                    <U_24>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_24 | PromiseLike<U_24>): import("dexie").PromiseExtended<U_24>;
                    <U_25>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, table4: string, scope: (trans: import("dexie").Transaction) => U_25 | PromiseLike<U_25>): import("dexie").PromiseExtended<U_25>;
                    <U_26>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: (trans: import("dexie").Transaction) => U_26 | PromiseLike<U_26>): import("dexie").PromiseExtended<U_26>;
                    <U_27>(mode: import("dexie").TransactionMode, table: string, table2: string, table3: string, table4: string, table5: string, scope: (trans: import("dexie").Transaction) => U_27 | PromiseLike<U_27>): import("dexie").PromiseExtended<U_27>;
                    <U_28>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: (trans: import("dexie").Transaction) => U_28 | PromiseLike<U_28>): import("dexie").PromiseExtended<U_28>;
                    <U_29>(mode: import("dexie").TransactionMode, tables: string[], scope: (trans: import("dexie").Transaction) => U_29 | PromiseLike<U_29>): import("dexie").PromiseExtended<U_29>;
                };
                close: () => void;
                delete: () => import("dexie").PromiseExtended<void>;
                isOpen: () => boolean;
                hasBeenClosed: () => boolean;
                hasFailed: () => boolean;
                dynamicallyOpened: () => boolean;
                backendDB: () => IDBDatabase;
                use: (middleware: import("dexie").Middleware<import("dexie").DBCore>) => import("../../../core/IndexDB").default;
                unuse: {
                    ({ stack, create }: import("dexie").Middleware<{
                        stack: "dbcore";
                    }>): import("../../../core/IndexDB").default;
                    ({ stack, name }: {
                        stack: "dbcore";
                        name: string;
                    }): import("../../../core/IndexDB").default;
                };
                Table: {
                    prototype: {
                        db: any;
                        name: string;
                        schema: {
                            name: string;
                            primKey: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            };
                            indexes: {
                                name: string;
                                keyPath: string | string[];
                                unique: boolean;
                                multi: boolean;
                                auto: boolean;
                                compound: boolean;
                                src: string;
                            }[];
                            mappedClass: Function;
                            idxByName: {
                                [x: string]: {
                                    name: string;
                                    keyPath: string | string[];
                                    unique: boolean;
                                    multi: boolean;
                                    auto: boolean;
                                    compound: boolean;
                                    src: string;
                                };
                            };
                            readHook?: (x: any) => any;
                        };
                        hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                        core: {
                            readonly name: string;
                            readonly schema: {
                                readonly name: string;
                                readonly primaryKey: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                };
                                readonly indexes: {
                                    readonly name: string;
                                    readonly isPrimaryKey?: boolean;
                                    readonly outbound?: boolean;
                                    readonly compound?: boolean;
                                    readonly keyPath: string | string[];
                                    readonly autoIncrement?: boolean;
                                    readonly unique?: boolean;
                                    readonly multiEntry?: boolean;
                                    readonly extractKey: (value: any) => any;
                                }[];
                                readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                            };
                            mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                            get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                            getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                            query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                            openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                            count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                        };
                        get: {
                            (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                            <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").PromiseExtended<any>;
                            <R_1>(equalityCriterias: {
                                [key: string]: any;
                            }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                        };
                        where: {
                            (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                            (equalityCriterias: {
                                [key: string]: any;
                            }): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        count: {
                            (): import("dexie").PromiseExtended<number>;
                            <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                        };
                        offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        each: (callback: (obj: any, cursor: {
                            key: any;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        toArray: {
                            (): import("dexie").PromiseExtended<any[]>;
                            <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                        };
                        toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        mapToClass: (constructor: Function) => Function;
                        add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        update: (key: any, changes: {
                            [keyPath: string]: any;
                        }) => import("dexie").PromiseExtended<number>;
                        put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                        clear: () => import("dexie").PromiseExtended<void>;
                        bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                        bulkAdd: {
                            <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B;
                            }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_1 extends boolean>(items: readonly any[], options: {
                                allKeys: B_1;
                            }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkPut: {
                            <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                allKeys: B_2;
                            }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            <B_3 extends boolean>(items: readonly any[], options: {
                                allKeys: B_3;
                            }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                            (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                allKeys: boolean;
                            }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                        };
                        bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                    };
                };
                WhereClause: {
                    prototype: {
                        above: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        aboveOrEqual: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        anyOf: {
                            (keys: readonly import("dexie").IndexableType[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            (...keys: import("dexie").IndexableType[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        anyOfIgnoreCase: {
                            (keys: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            (...keys: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        below: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        belowOrEqual: (key: any) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        between: (lower: any, upper: any, includeLower?: boolean, includeUpper?: boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        equals: (key: import("dexie").IndexableType) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        equalsIgnoreCase: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        inAnyRange: (ranges: readonly {
                            0: any;
                            1: any;
                        }[], options?: {
                            includeLowers?: boolean;
                            includeUppers?: boolean;
                        }) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        startsWith: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        startsWithAnyOf: {
                            (prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            (...prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        startsWithIgnoreCase: (key: string) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        startsWithAnyOfIgnoreCase: {
                            (prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                            (...prefixes: string[]): import("dexie").Collection<any, import("dexie").IndexableType>;
                        };
                        noneOf: (keys: readonly import("dexie").IndexableType[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        notEqual: (key: import("dexie").IndexableType) => import("dexie").Collection<any, import("dexie").IndexableType>;
                    };
                };
                Version: {
                    prototype: {
                        stores: (schema: {
                            [tableName: string]: string;
                        }) => import("dexie").Version;
                        upgrade: (fn: (trans: import("dexie").Transaction) => void | PromiseLike<any>) => import("dexie").Version;
                    };
                };
                Transaction: {
                    prototype: {
                        db: {
                            readonly name: string;
                            readonly tables: {
                                db: any;
                                name: string;
                                schema: {
                                    name: string;
                                    primKey: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    };
                                    indexes: {
                                        name: string;
                                        keyPath: string | string[];
                                        unique: boolean;
                                        multi: boolean;
                                        auto: boolean;
                                        compound: boolean;
                                        src: string;
                                    }[];
                                    mappedClass: Function;
                                    idxByName: {
                                        [x: string]: {
                                            name: string;
                                            keyPath: string | string[];
                                            unique: boolean;
                                            multi: boolean;
                                            auto: boolean;
                                            compound: boolean;
                                            src: string;
                                        };
                                    };
                                    readHook?: (x: any) => any;
                                };
                                hook: import("dexie").TableHooks<any, import("dexie").IndexableType>;
                                core: {
                                    readonly name: string;
                                    readonly schema: {
                                        readonly name: string;
                                        readonly primaryKey: {
                                            readonly name: string;
                                            readonly isPrimaryKey?: boolean;
                                            readonly outbound?: boolean;
                                            readonly compound?: boolean;
                                            readonly keyPath: string | string[];
                                            readonly autoIncrement?: boolean;
                                            readonly unique?: boolean;
                                            readonly multiEntry?: boolean;
                                            readonly extractKey: (value: any) => any;
                                        };
                                        readonly indexes: {
                                            readonly name: string;
                                            readonly isPrimaryKey?: boolean;
                                            readonly outbound?: boolean;
                                            readonly compound?: boolean;
                                            readonly keyPath: string | string[];
                                            readonly autoIncrement?: boolean;
                                            readonly unique?: boolean;
                                            readonly multiEntry?: boolean;
                                            readonly extractKey: (value: any) => any;
                                        }[];
                                        readonly getIndexByKeyPath: (keyPath: string | string[]) => import("dexie").DBCoreIndex;
                                    };
                                    mutate: (req: import("dexie").DBCoreMutateRequest) => Promise<import("dexie").DBCoreMutateResponse>;
                                    get: (req: import("dexie").DBCoreGetRequest) => Promise<any>;
                                    getMany: (req: import("dexie").DBCoreGetManyRequest) => Promise<any[]>;
                                    query: (req: import("dexie").DBCoreQueryRequest) => Promise<import("dexie").DBCoreQueryResponse>;
                                    openCursor: (req: import("dexie").DBCoreOpenCursorRequest) => Promise<import("dexie").DBCoreCursor>;
                                    count: (req: import("dexie").DBCoreCountRequest) => Promise<number>;
                                };
                                get: {
                                    (key: import("dexie").IndexableType): import("dexie").PromiseExtended<any>;
                                    <R>(key: import("dexie").IndexableType, thenShortcut: import("dexie").ThenShortcut<any, R>): import("dexie").PromiseExtended<R>;
                                    (equalityCriterias: {
                                        [key: string]: any;
                                    }): import("dexie").PromiseExtended<any>;
                                    <R_1>(equalityCriterias: {
                                        [key: string]: any;
                                    }, thenShortcut: import("dexie").ThenShortcut<any, R_1>): import("dexie").PromiseExtended<R_1>;
                                };
                                where: {
                                    (index: string | string[]): import("dexie").WhereClause<any, import("dexie").IndexableType>;
                                    (equalityCriterias: {
                                        [key: string]: any;
                                    }): import("dexie").Collection<any, import("dexie").IndexableType>;
                                };
                                filter: (fn: (obj: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                count: {
                                    (): import("dexie").PromiseExtended<number>;
                                    <R_2>(thenShortcut: import("dexie").ThenShortcut<number, R_2>): import("dexie").PromiseExtended<R_2>;
                                };
                                offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                each: (callback: (obj: any, cursor: {
                                    key: any;
                                    primaryKey: import("dexie").IndexableType;
                                }) => any) => import("dexie").PromiseExtended<void>;
                                toArray: {
                                    (): import("dexie").PromiseExtended<any[]>;
                                    <R_3>(thenShortcut: import("dexie").ThenShortcut<any[], R_3>): import("dexie").PromiseExtended<R_3>;
                                };
                                toCollection: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                                orderBy: (index: string | string[]) => import("dexie").Collection<any, import("dexie").IndexableType>;
                                reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                                mapToClass: (constructor: Function) => Function;
                                add: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                update: (key: any, changes: {
                                    [keyPath: string]: any;
                                }) => import("dexie").PromiseExtended<number>;
                                put: (item: any, key?: import("dexie").IndexableType) => import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                delete: (key: import("dexie").IndexableType) => import("dexie").PromiseExtended<void>;
                                clear: () => import("dexie").PromiseExtended<void>;
                                bulkGet: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<any[]>;
                                bulkAdd: {
                                    <B extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                        allKeys: B;
                                    }): import("dexie").PromiseExtended<B extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                    <B_1 extends boolean>(items: readonly any[], options: {
                                        allKeys: B_1;
                                    }): import("dexie").PromiseExtended<B_1 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                    (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                        allKeys: boolean;
                                    }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                };
                                bulkPut: {
                                    <B_2 extends boolean>(items: readonly any[], keys: import("dexie").IndexableTypeArrayReadonly, options: {
                                        allKeys: B_2;
                                    }): import("dexie").PromiseExtended<B_2 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                    <B_3 extends boolean>(items: readonly any[], options: {
                                        allKeys: B_3;
                                    }): import("dexie").PromiseExtended<B_3 extends true ? import("dexie").IndexableType[] : import("dexie").IndexableType>;
                                    (items: readonly any[], keys?: import("dexie").IndexableTypeArrayReadonly, options?: {
                                        allKeys: boolean;
                                    }): import("dexie").PromiseExtended<import("dexie").IndexableType>;
                                };
                                bulkDelete: (keys: import("dexie").IndexableType[]) => import("dexie").PromiseExtended<void>;
                            }[];
                            table: <T = any, TKey = any>(tableName: string) => import("dexie").Table<T, TKey>;
                            transaction: {
                                <U>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U | PromiseLike<U>): import("dexie").PromiseExtended<U>;
                                <U_1>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_1 | PromiseLike<U_1>): import("dexie").PromiseExtended<U_1>;
                                <U_2>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_2 | PromiseLike<U_2>): import("dexie").PromiseExtended<U_2>;
                                <U_3>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_3 | PromiseLike<U_3>): import("dexie").PromiseExtended<U_3>;
                                <U_4>(mode: import("dexie").TransactionMode, table: import("dexie").Table<any, import("dexie").IndexableType>, table2: import("dexie").Table<any, import("dexie").IndexableType>, table3: import("dexie").Table<any, import("dexie").IndexableType>, table4: import("dexie").Table<any, import("dexie").IndexableType>, table5: import("dexie").Table<any, import("dexie").IndexableType>, scope: () => U_4 | PromiseLike<U_4>): import("dexie").PromiseExtended<U_4>;
                                <U_5>(mode: import("dexie").TransactionMode, tables: import("dexie").Table<any, import("dexie").IndexableType>[], scope: () => U_5 | PromiseLike<U_5>): import("dexie").PromiseExtended<U_5>;
                            };
                        };
                        active: boolean;
                        mode: IDBTransactionMode;
                        storeNames: string[];
                        parent?: any;
                        on: import("dexie").TransactionEvents;
                        abort: () => void;
                        table: {
                            (tableName: string): import("dexie").Table<any, any>;
                            <T_2>(tableName: string): import("dexie").Table<T_2, any>;
                            <T_3, Key>(tableName: string): import("dexie").Table<T_3, Key>;
                        };
                    };
                };
                Collection: {
                    prototype: {
                        and: (filter: (x: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        clone: (props?: Object) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        count: {
                            (): import("dexie").PromiseExtended<number>;
                            <R_10>(thenShortcut: import("dexie").ThenShortcut<number, R_10>): import("dexie").PromiseExtended<R_10>;
                        };
                        distinct: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        each: (callback: (obj: any, cursor: {
                            key: import("dexie").IndexableType;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        eachKey: (callback: (key: import("dexie").IndexableType, cursor: {
                            key: import("dexie").IndexableType;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        eachPrimaryKey: (callback: (key: import("dexie").IndexableType, cursor: {
                            key: import("dexie").IndexableType;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        eachUniqueKey: (callback: (key: import("dexie").IndexableType, cursor: {
                            key: import("dexie").IndexableType;
                            primaryKey: import("dexie").IndexableType;
                        }) => any) => import("dexie").PromiseExtended<void>;
                        filter: (filter: (x: any) => boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        first: {
                            (): import("dexie").PromiseExtended<any>;
                            <R_11>(thenShortcut: import("dexie").ThenShortcut<any, R_11>): import("dexie").PromiseExtended<R_11>;
                        };
                        keys: {
                            (): import("dexie").PromiseExtended<import("dexie").IndexableTypeArray>;
                            <R_12>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableTypeArray, R_12>): import("dexie").PromiseExtended<R_12>;
                        };
                        primaryKeys: {
                            (): import("dexie").PromiseExtended<import("dexie").IndexableType[]>;
                            <R_13>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableType[], R_13>): import("dexie").PromiseExtended<R_13>;
                        };
                        last: {
                            (): import("dexie").PromiseExtended<any>;
                            <R_14>(thenShortcut: import("dexie").ThenShortcut<any, R_14>): import("dexie").PromiseExtended<R_14>;
                        };
                        limit: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        offset: (n: number) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        or: (indexOrPrimayKey: string) => import("dexie").WhereClause<any, import("dexie").IndexableType>;
                        raw: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        reverse: () => import("dexie").Collection<any, import("dexie").IndexableType>;
                        sortBy: {
                            (keyPath: string): import("dexie").PromiseExtended<any[]>;
                            <R_15>(keyPath: string, thenShortcut: import("dexie").ThenShortcut<any[], R_15>): import("dexie").PromiseExtended<R_15>;
                        };
                        toArray: {
                            (): import("dexie").PromiseExtended<any[]>;
                            <R_16>(thenShortcut: import("dexie").ThenShortcut<any[], R_16>): import("dexie").PromiseExtended<R_16>;
                        };
                        uniqueKeys: {
                            (): import("dexie").PromiseExtended<import("dexie").IndexableTypeArray>;
                            <R_17>(thenShortcut: import("dexie").ThenShortcut<import("dexie").IndexableTypeArray, R_17>): import("dexie").PromiseExtended<R_17>;
                        };
                        until: (filter: (value: any) => boolean, includeStopEntry?: boolean) => import("dexie").Collection<any, import("dexie").IndexableType>;
                        delete: () => import("dexie").PromiseExtended<number>;
                        modify: {
                            (changeCallback: (obj: any, ctx: {
                                value: any;
                            }) => boolean | void): import("dexie").PromiseExtended<number>;
                            (changes: {
                                [keyPath: string]: any;
                            }): import("dexie").PromiseExtended<number>;
                        };
                    };
                };
            };
            expirationTime: number;
        };
    }>;
    activeIndex: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}>;
export default _default;
