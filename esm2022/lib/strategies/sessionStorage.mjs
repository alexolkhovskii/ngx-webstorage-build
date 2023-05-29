import { BaseSyncStorageStrategy } from './baseSyncStorage';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { SESSION_STORAGE } from '../core/nativeStorage';
import { StorageStrategies } from '../constants/strategy';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../core/strategyCache";
class SessionStorageStrategy extends BaseSyncStorageStrategy {
    static { this.strategyName = StorageStrategies.Session; }
    constructor(storage, cache, platformId, zone) {
        super(storage, cache);
        this.storage = storage;
        this.cache = cache;
        this.platformId = platformId;
        this.zone = zone;
        this.name = SessionStorageStrategy.strategyName;
        if (isPlatformBrowser(this.platformId))
            this.listenExternalChanges();
    }
    listenExternalChanges() {
        window.addEventListener('storage', (event) => this.zone.run(() => {
            if (event.storageArea !== this.storage)
                return;
            const key = event.key;
            if (event.key !== null)
                this.cache.del(this.name, event.key);
            else
                this.cache.clear(this.name);
            this.keyChanges.next(key);
        }));
    }
    static { this.ɵfac = function SessionStorageStrategy_Factory(t) { return new (t || SessionStorageStrategy)(i0.ɵɵinject(SESSION_STORAGE), i0.ɵɵinject(i1.StrategyCacheService), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SessionStorageStrategy, factory: SessionStorageStrategy.ɵfac }); }
}
export { SessionStorageStrategy };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SessionStorageStrategy, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [SESSION_STORAGE]
            }] }, { type: i1.StrategyCacheService }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvblN0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtd2Vic3RvcmFnZS9zcmMvbGliL3N0cmF0ZWdpZXMvc2Vzc2lvblN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBR2xELE1BQ2Esc0JBQXVCLFNBQVEsdUJBQXVCO2FBQ2xELGlCQUFZLEdBQVcsaUJBQWlCLENBQUMsT0FBTyxBQUFwQyxDQUFxQztJQUdqRSxZQUErQyxPQUFtQixFQUM1QyxLQUEyQixFQUNOLFVBQWUsRUFDcEMsSUFBWTtRQUNqQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBSndCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDTixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQVE7UUFMekIsU0FBSSxHQUFXLHNCQUFzQixDQUFDLFlBQVksQ0FBQztRQU8zRCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRVMscUJBQXFCO1FBQzlCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDOUUsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU87WUFDL0MsTUFBTSxHQUFHLEdBQVcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt1RkFwQlcsc0JBQXNCLGNBSWQsZUFBZSxxREFFZixXQUFXO3VFQU5uQixzQkFBc0IsV0FBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxVQUFVOztzQkFLRyxNQUFNO3VCQUFDLGVBQWU7O3NCQUV0QixNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmF0ZWd5Q2FjaGVTZXJ2aWNlfSBmcm9tICcuLi9jb3JlL3N0cmF0ZWd5Q2FjaGUnO1xuaW1wb3J0IHtCYXNlU3luY1N0b3JhZ2VTdHJhdGVneX0gZnJvbSAnLi9iYXNlU3luY1N0b3JhZ2UnO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUExBVEZPUk1fSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTRVNTSU9OX1NUT1JBR0V9IGZyb20gJy4uL2NvcmUvbmF0aXZlU3RvcmFnZSc7XG5pbXBvcnQge1N0b3JhZ2VTdHJhdGVnaWVzfSBmcm9tICcuLi9jb25zdGFudHMvc3RyYXRlZ3knO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7V2ViU3RvcmFnZX0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL3dlYlN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0b3JhZ2VTdHJhdGVneSBleHRlbmRzIEJhc2VTeW5jU3RvcmFnZVN0cmF0ZWd5IHtcblx0c3RhdGljIHJlYWRvbmx5IHN0cmF0ZWd5TmFtZTogc3RyaW5nID0gU3RvcmFnZVN0cmF0ZWdpZXMuU2Vzc2lvbjtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nID0gU2Vzc2lvblN0b3JhZ2VTdHJhdGVneS5zdHJhdGVneU5hbWU7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChTRVNTSU9OX1NUT1JBR0UpIHByb3RlY3RlZCBzdG9yYWdlOiBXZWJTdG9yYWdlLFxuXHQgICAgICAgICAgICBwcm90ZWN0ZWQgY2FjaGU6IFN0cmF0ZWd5Q2FjaGVTZXJ2aWNlLFxuXHQgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogYW55LFxuXHQgICAgICAgICAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lKSB7XG5cdFx0c3VwZXIoc3RvcmFnZSwgY2FjaGUpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB0aGlzLmxpc3RlbkV4dGVybmFsQ2hhbmdlcygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGxpc3RlbkV4dGVybmFsQ2hhbmdlcygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIChldmVudDogU3RvcmFnZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IHtcblx0XHRcdGlmIChldmVudC5zdG9yYWdlQXJlYSAhPT0gdGhpcy5zdG9yYWdlKSByZXR1cm47XG5cdFx0XHRjb25zdCBrZXk6IHN0cmluZyA9IGV2ZW50LmtleTtcblx0XHRcdGlmIChldmVudC5rZXkgIT09IG51bGwpIHRoaXMuY2FjaGUuZGVsKHRoaXMubmFtZSwgZXZlbnQua2V5KTtcblx0XHRcdGVsc2UgdGhpcy5jYWNoZS5jbGVhcih0aGlzLm5hbWUpO1xuXHRcdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHR9KSk7XG5cdH1cblxufVxuIl19