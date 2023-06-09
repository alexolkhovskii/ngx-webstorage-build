import { WebStorage } from '../lib/core/interfaces/webStorage';
export declare class StorageStub implements WebStorage {
    [name: string]: any;
    store: {
        [prop: string]: any;
    };
    get length(): number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}
//# sourceMappingURL=storage.stub.d.ts.map