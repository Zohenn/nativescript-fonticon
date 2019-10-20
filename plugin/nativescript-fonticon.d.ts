export declare class TNSFontIcon {
    static css: any;
    static paths: {
        [k: string]: string | object;
    };
    static debug: boolean;
    private static loadFile;
    private static loadFileSync;
    private static parseAndMapCSS;
    static loadCss: () => Promise<any>;
    static loadCssSync: () => void;
}
export declare function fonticon(values: string | string[]): string;
