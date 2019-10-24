declare module '*.scss' {
    const classes: {
        [key: string]: string;
    };

    export default classes;
}

declare interface SimpleObject<T = unknown> {
    [key: string]: T;
}

declare interface AnonymousObject {
    [key: string]: any;
}

declare type Nullable<T> = T | null;
