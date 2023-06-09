import { NgxWebstorageConfiguration } from '../config';
export declare class StorageKeyManager {
    static prefix: string;
    static separator: string;
    static isCaseSensitive: boolean;
    static normalize(raw: string): string;
    static isNormalizedKey(key: string): boolean;
    static setPrefix(prefix: string): void;
    static setSeparator(separator: string): void;
    static setCaseSensitive(enable: boolean): void;
    static consumeConfiguration(config: NgxWebstorageConfiguration): void;
}
//# sourceMappingURL=storageKeyManager.d.ts.map