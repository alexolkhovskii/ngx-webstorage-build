import { StorageStrategy } from '../core/interfaces/storageStrategy';
import { Observable, Subject } from 'rxjs';
import { StrategyCacheService } from '../core/strategyCache';
import * as i0 from "@angular/core";
export declare class InMemoryStorageStrategy implements StorageStrategy<any> {
    protected cache: StrategyCacheService;
    static readonly strategyName: string;
    readonly keyChanges: Subject<string>;
    isAvailable: boolean;
    readonly name: string;
    constructor(cache: StrategyCacheService);
    get(key: string): Observable<any>;
    set(key: string, value: any): Observable<any>;
    del(key: string): Observable<void>;
    clear(): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryStorageStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryStorageStrategy>;
}
//# sourceMappingURL=inMemory.d.ts.map