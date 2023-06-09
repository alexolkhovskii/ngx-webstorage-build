import { APP_INITIALIZER, Inject, InjectionToken, NgModule, Optional } from '@angular/core';
import { LocalStorageProvider, SessionStorageProvider } from './core/nativeStorage';
import { Services } from './services/index';
import { Strategies } from './strategies/index';
import { StrategyIndex } from './services/strategyIndex';
import { StorageKeyManager } from './helpers/storageKeyManager';
import * as i0 from "@angular/core";
import * as i1 from "./services/strategyIndex";
export const LIB_CONFIG = new InjectionToken('ngx_webstorage_config');
export function appInit(index) {
    index.indexStrategies();
    return () => StrategyIndex.index;
}
class NgxWebstorageModule {
    constructor(index, config) {
        if (config)
            StorageKeyManager.consumeConfiguration(config);
        else
            console.error('NgxWebstorage : Possible misconfiguration (The forRoot method usage is mandatory since the 3.0.0)');
    }
    static forRoot(config = {}) {
        return {
            ngModule: NgxWebstorageModule,
            providers: [
                {
                    provide: LIB_CONFIG,
                    useValue: config,
                },
                LocalStorageProvider,
                SessionStorageProvider,
                ...Services,
                ...Strategies,
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInit,
                    deps: [StrategyIndex],
                    multi: true
                }
            ]
        };
    }
    static { this.ɵfac = function NgxWebstorageModule_Factory(t) { return new (t || NgxWebstorageModule)(i0.ɵɵinject(i1.StrategyIndex), i0.ɵɵinject(LIB_CONFIG, 8)); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxWebstorageModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({}); }
}
export { NgxWebstorageModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxWebstorageModule, [{
        type: NgModule,
        args: [{}]
    }], function () { return [{ type: i1.StrategyIndex }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [LIB_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXdlYnN0b3JhZ2Uvc3JjL2xpYi9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7QUFFOUQsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUErQyxJQUFJLGNBQWMsQ0FBNkIsdUJBQXVCLENBQUMsQ0FBQztBQUU5SSxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQW9CO0lBQzNDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDbEMsQ0FBQztBQUVELE1BQ2EsbUJBQW1CO0lBRS9CLFlBQVksS0FBb0IsRUFBa0MsTUFBa0M7UUFDbkcsSUFBSSxNQUFNO1lBQUUsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQ3RELE9BQU8sQ0FBQyxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztJQUN6SCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFxQyxFQUFFO1FBQ3JELE9BQU87WUFDTixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsUUFBUSxFQUFFLE1BQU07aUJBQ2hCO2dCQUNELG9CQUFvQjtnQkFDcEIsc0JBQXNCO2dCQUN0QixHQUFHLFFBQVE7Z0JBQ1gsR0FBRyxVQUFVO2dCQUNiO29CQUNDLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsT0FBTztvQkFDbkIsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNyQixLQUFLLEVBQUUsSUFBSTtpQkFDWDthQUNEO1NBQ0QsQ0FBQztJQUNILENBQUM7b0ZBM0JXLG1CQUFtQiw2Q0FFdUIsVUFBVTttRUFGcEQsbUJBQW1COzs7U0FBbkIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FEL0IsUUFBUTtlQUFDLEVBQUU7O3NCQUd3QixRQUFROztzQkFBSSxNQUFNO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlUHJvdmlkZXIsIFNlc3Npb25TdG9yYWdlUHJvdmlkZXJ9IGZyb20gJy4vY29yZS9uYXRpdmVTdG9yYWdlJztcbmltcG9ydCB7U2VydmljZXN9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHtTdHJhdGVnaWVzfSBmcm9tICcuL3N0cmF0ZWdpZXMvaW5kZXgnO1xuaW1wb3J0IHtTdHJhdGVneUluZGV4fSBmcm9tICcuL3NlcnZpY2VzL3N0cmF0ZWd5SW5kZXgnO1xuaW1wb3J0IHtOZ3hXZWJzdG9yYWdlQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtTdG9yYWdlS2V5TWFuYWdlcn0gZnJvbSAnLi9oZWxwZXJzL3N0b3JhZ2VLZXlNYW5hZ2VyJztcblxuZXhwb3J0IGNvbnN0IExJQl9DT05GSUc6IEluamVjdGlvblRva2VuPE5neFdlYnN0b3JhZ2VDb25maWd1cmF0aW9uPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ3hXZWJzdG9yYWdlQ29uZmlndXJhdGlvbj4oJ25neF93ZWJzdG9yYWdlX2NvbmZpZycpO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwSW5pdChpbmRleDogU3RyYXRlZ3lJbmRleCkge1xuXHRpbmRleC5pbmRleFN0cmF0ZWdpZXMoKTtcblx0cmV0dXJuICgpID0+IFN0cmF0ZWd5SW5kZXguaW5kZXg7XG59XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBOZ3hXZWJzdG9yYWdlTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcihpbmRleDogU3RyYXRlZ3lJbmRleCwgQE9wdGlvbmFsKCkgQEluamVjdChMSUJfQ09ORklHKSBjb25maWc6IE5neFdlYnN0b3JhZ2VDb25maWd1cmF0aW9uKSB7XG5cdFx0aWYgKGNvbmZpZykgU3RvcmFnZUtleU1hbmFnZXIuY29uc3VtZUNvbmZpZ3VyYXRpb24oY29uZmlnKTtcblx0XHRlbHNlIGNvbnNvbGUuZXJyb3IoJ05neFdlYnN0b3JhZ2UgOiBQb3NzaWJsZSBtaXNjb25maWd1cmF0aW9uIChUaGUgZm9yUm9vdCBtZXRob2QgdXNhZ2UgaXMgbWFuZGF0b3J5IHNpbmNlIHRoZSAzLjAuMCknKTtcblx0fVxuXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZzogTmd4V2Vic3RvcmFnZUNvbmZpZ3VyYXRpb24gPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4V2Vic3RvcmFnZU1vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogTmd4V2Vic3RvcmFnZU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogTElCX0NPTkZJRyxcblx0XHRcdFx0XHR1c2VWYWx1ZTogY29uZmlnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRMb2NhbFN0b3JhZ2VQcm92aWRlcixcblx0XHRcdFx0U2Vzc2lvblN0b3JhZ2VQcm92aWRlcixcblx0XHRcdFx0Li4uU2VydmljZXMsXG5cdFx0XHRcdC4uLlN0cmF0ZWdpZXMsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogYXBwSW5pdCxcblx0XHRcdFx0XHRkZXBzOiBbU3RyYXRlZ3lJbmRleF0sXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxufVxuIl19