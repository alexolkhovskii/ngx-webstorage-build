import { StorageStrategy } from '../core/interfaces/storageStrategy';
import { Observable, Subject } from 'rxjs';
import { StrategyCacheService } from '../core/strategyCache';
import { WebStorage } from '../core/interfaces/webStorage';
export declare abstract class BaseSyncStorageStrategy implements StorageStrategy<any> {
    protected storage: WebStorage;
    protected cache: StrategyCacheService;
    readonly keyChanges: Subject<string>;
    abstract readonly name: string;
    constructor(storage: WebStorage, cache: StrategyCacheService);
    protected _isAvailable: boolean;
    get isAvailable(): boolean;
    get(key: string): Observable<any>;
    set(key: string, value: any): Observable<any>;
    del(key: string): Observable<void>;
    clear(): Observable<void>;
}
//# sourceMappingURL=baseSyncStorage.d.ts.map