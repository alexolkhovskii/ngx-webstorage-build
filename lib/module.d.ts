import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { StrategyIndex } from './services/strategyIndex';
import { NgxWebstorageConfiguration } from './config';
import * as i0 from "@angular/core";
export declare const LIB_CONFIG: InjectionToken<NgxWebstorageConfiguration>;
export declare function appInit(index: StrategyIndex): () => {
    [name: string]: import("ngx-webstorage").StorageStrategy<any>;
};
export declare class NgxWebstorageModule {
    constructor(index: StrategyIndex, config: NgxWebstorageConfiguration);
    static forRoot(config?: NgxWebstorageConfiguration): ModuleWithProviders<NgxWebstorageModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxWebstorageModule, [null, { optional: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxWebstorageModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxWebstorageModule>;
}
//# sourceMappingURL=module.d.ts.map