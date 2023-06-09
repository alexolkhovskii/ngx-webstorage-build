import { StrategyCacheService } from '../core/strategyCache';
import { BaseSyncStorageStrategy } from './baseSyncStorage';
import { NgZone } from '@angular/core';
import { WebStorage } from '../core/interfaces/webStorage';
import * as i0 from "@angular/core";
export declare class SessionStorageStrategy extends BaseSyncStorageStrategy {
    protected storage: WebStorage;
    protected cache: StrategyCacheService;
    protected platformId: any;
    protected zone: NgZone;
    static readonly strategyName: string;
    readonly name: string;
    constructor(storage: WebStorage, cache: StrategyCacheService, platformId: any, zone: NgZone);
    protected listenExternalChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SessionStorageStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SessionStorageStrategy>;
}
//# sourceMappingURL=sessionStorage.d.ts.map