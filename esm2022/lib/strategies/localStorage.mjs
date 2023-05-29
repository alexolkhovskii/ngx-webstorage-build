import { BaseSyncStorageStrategy } from './baseSyncStorage';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LOCAL_STORAGE } from '../core/nativeStorage';
import { StorageStrategies } from '../constants/strategy';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../core/strategyCache";
class LocalStorageStrategy extends BaseSyncStorageStrategy {
    static { this.strategyName = StorageStrategies.Local; }
    constructor(storage, cache, platformId, zone) {
        super(storage, cache);
        this.storage = storage;
        this.cache = cache;
        this.platformId = platformId;
        this.zone = zone;
        this.name = LocalStorageStrategy.strategyName;
        if (isPlatformBrowser(this.platformId))
            this.listenExternalChanges();
    }
    listenExternalChanges() {
        window.addEventListener('storage', (event) => this.zone.run(() => {
            if (event.storageArea !== this.storage)
                return;
            const key = event.key;
            if (key !== null)
                this.cache.del(this.name, event.key);
            else
                this.cache.clear(this.name);
            this.keyChanges.next(key);
        }));
    }
    static { this.ɵfac = function LocalStorageStrategy_Factory(t) { return new (t || LocalStorageStrategy)(i0.ɵɵinject(LOCAL_STORAGE), i0.ɵɵinject(i1.StrategyCacheService), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalStorageStrategy, factory: LocalStorageStrategy.ɵfac }); }
}
export { LocalStorageStrategy };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageStrategy, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCAL_STORAGE]
            }] }, { type: i1.StrategyCacheService }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXdlYnN0b3JhZ2Uvc3JjL2xpYi9zdHJhdGVnaWVzL2xvY2FsU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBVSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFHbEQsTUFDYSxvQkFBcUIsU0FBUSx1QkFBdUI7YUFDaEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQyxLQUFLLEFBQWxDLENBQW1DO0lBRy9ELFlBQTZDLE9BQW1CLEVBQzFDLEtBQTJCLEVBQ04sVUFBZSxFQUNwQyxJQUFZO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFKc0IsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUMxQyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUNOLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDcEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUx6QixTQUFJLEdBQVcsb0JBQW9CLENBQUMsWUFBWSxDQUFDO1FBT3pELElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFFUyxxQkFBcUI7UUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUM5RSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTztZQUMvQyxNQUFNLEdBQUcsR0FBVyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzlCLElBQUksR0FBRyxLQUFLLElBQUk7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O2dCQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7cUZBcEJXLG9CQUFvQixjQUlaLGFBQWEscURBRWIsV0FBVzt1RUFObkIsb0JBQW9CLFdBQXBCLG9CQUFvQjs7U0FBcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsVUFBVTs7c0JBS0csTUFBTTt1QkFBQyxhQUFhOztzQkFFcEIsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHJhdGVneUNhY2hlU2VydmljZX0gZnJvbSAnLi4vY29yZS9zdHJhdGVneUNhY2hlJztcbmltcG9ydCB7QmFzZVN5bmNTdG9yYWdlU3RyYXRlZ3l9IGZyb20gJy4vYmFzZVN5bmNTdG9yYWdlJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBMQVRGT1JNX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TE9DQUxfU1RPUkFHRX0gZnJvbSAnLi4vY29yZS9uYXRpdmVTdG9yYWdlJztcbmltcG9ydCB7U3RvcmFnZVN0cmF0ZWdpZXN9IGZyb20gJy4uL2NvbnN0YW50cy9zdHJhdGVneSc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtXZWJTdG9yYWdlfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvd2ViU3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTdHJhdGVneSBleHRlbmRzIEJhc2VTeW5jU3RvcmFnZVN0cmF0ZWd5IHtcblx0c3RhdGljIHJlYWRvbmx5IHN0cmF0ZWd5TmFtZTogc3RyaW5nID0gU3RvcmFnZVN0cmF0ZWdpZXMuTG9jYWw7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9IExvY2FsU3RvcmFnZVN0cmF0ZWd5LnN0cmF0ZWd5TmFtZTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMX1NUT1JBR0UpIHByb3RlY3RlZCBzdG9yYWdlOiBXZWJTdG9yYWdlLFxuXHQgICAgICAgICAgICBwcm90ZWN0ZWQgY2FjaGU6IFN0cmF0ZWd5Q2FjaGVTZXJ2aWNlLFxuXHQgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogYW55LFxuXHQgICAgICAgICAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lKSB7XG5cdFx0c3VwZXIoc3RvcmFnZSwgY2FjaGUpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB0aGlzLmxpc3RlbkV4dGVybmFsQ2hhbmdlcygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGxpc3RlbkV4dGVybmFsQ2hhbmdlcygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIChldmVudDogU3RvcmFnZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IHtcblx0XHRcdGlmIChldmVudC5zdG9yYWdlQXJlYSAhPT0gdGhpcy5zdG9yYWdlKSByZXR1cm47XG5cdFx0XHRjb25zdCBrZXk6IHN0cmluZyA9IGV2ZW50LmtleTtcblx0XHRcdGlmIChrZXkgIT09IG51bGwpIHRoaXMuY2FjaGUuZGVsKHRoaXMubmFtZSwgZXZlbnQua2V5KTtcblx0XHRcdGVsc2UgdGhpcy5jYWNoZS5jbGVhcih0aGlzLm5hbWUpO1xuXHRcdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHR9KSk7XG5cdH1cblxufVxuIl19