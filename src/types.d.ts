declare module '*.scss' {
    const classes: {
        [key: string]: string;
    };

    export default classes;
}

declare interface SimpleObject<T = unknown> {
    [key: string]: T;
}

declare type Nullable<T> = T | null;
