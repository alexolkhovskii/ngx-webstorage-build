import { StorageStrategy } from '../core/interfaces/storageStrategy';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare const InvalidStrategyError = "invalid_strategy";
export declare class StrategyIndex {
    protected strategies: StorageStrategy<any>[];
    static index: {
        [name: string]: StorageStrategy<any>;
    };
    readonly registration$: Subject<string>;
    constructor(strategies: StorageStrategy<any>[]);
    static get(name: string): StorageStrategy<any>;
    static set(name: string, strategy: any): void;
    static clear(name?: string): void;
    static isStrategyRegistered(name: string): boolean;
    static hasRegistredStrategies(): boolean;
    getStrategy(name: string): StorageStrategy<any>;
    indexStrategies(): void;
    indexStrategy(name: string, overrideIfExists?: boolean): StorageStrategy<any>;
    register(name: string, strategy: StorageStrategy<any>, overrideIfExists?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StrategyIndex, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StrategyIndex>;
}
//# sourceMappingURL=strategyIndex.d.ts.map