import { Observable, Subject } from 'rxjs';
import { StorageStrategy } from '../lib/core/interfaces/storageStrategy';
export declare const StorageStrategyStubName: string;
export declare class StorageStrategyStub implements StorageStrategy<any> {
    readonly keyChanges: Subject<string>;
    store: any;
    _available: boolean;
    readonly name: string;
    constructor(name?: string);
    get isAvailable(): boolean;
    get(key: string): Observable<any>;
    set(key: string, value: any): Observable<any>;
    del(key: string): Observable<void>;
    clear(): Observable<void>;
}
//# sourceMappingURL=storageStrategy.stub.d.ts.map