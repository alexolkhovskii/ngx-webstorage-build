import { of, Subject } from 'rxjs';
import { StrategyCacheService } from '../core/strategyCache';
import { StorageStrategies } from '../constants/strategy';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/strategyCache";
class InMemoryStorageStrategy {
    static { this.strategyName = StorageStrategies.InMemory; }
    constructor(cache) {
        this.cache = cache;
        this.keyChanges = new Subject();
        this.isAvailable = true;
        this.name = InMemoryStorageStrategy.strategyName;
    }
    get(key) {
        return of(this.cache.get(this.name, key));
    }
    set(key, value) {
        this.cache.set(this.name, key, value);
        this.keyChanges.next(key);
        return of(value);
    }
    del(key) {
        this.cache.del(this.name, key);
        this.keyChanges.next(key);
        return of(null);
    }
    clear() {
        this.cache.clear(this.name);
        this.keyChanges.next(null);
        return of(null);
    }
    static { this.ɵfac = function InMemoryStorageStrategy_Factory(t) { return new (t || InMemoryStorageStrategy)(i0.ɵɵinject(StrategyCacheService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InMemoryStorageStrategy, factory: InMemoryStorageStrategy.ɵfac }); }
}
export { InMemoryStorageStrategy };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InMemoryStorageStrategy, [{
        type: Injectable
    }], function () { return [{ type: i1.StrategyCacheService, decorators: [{
                type: Inject,
                args: [StrategyCacheService]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5NZW1vcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtd2Vic3RvcmFnZS9zcmMvbGliL3N0cmF0ZWdpZXMvaW5NZW1vcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUVqRCxNQUNhLHVCQUF1QjthQUNuQixpQkFBWSxHQUFXLGlCQUFpQixDQUFDLFFBQVEsQUFBckMsQ0FBc0M7SUFLbEUsWUFBb0QsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFKdEUsZUFBVSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3JELGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyx1QkFBdUIsQ0FBQyxZQUFZLENBQUM7SUFFcUIsQ0FBQztJQUVuRixHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQzt3RkE1QlcsdUJBQXVCLGNBTWYsb0JBQW9CO3VFQU41Qix1QkFBdUIsV0FBdkIsdUJBQXVCOztTQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxVQUFVOztzQkFPRyxNQUFNO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvc3RvcmFnZVN0cmF0ZWd5JztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2YsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdHJhdGVneUNhY2hlU2VydmljZX0gZnJvbSAnLi4vY29yZS9zdHJhdGVneUNhY2hlJztcbmltcG9ydCB7U3RvcmFnZVN0cmF0ZWdpZXN9IGZyb20gJy4uL2NvbnN0YW50cy9zdHJhdGVneSc7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0b3JhZ2VTdHJhdGVneSBpbXBsZW1lbnRzIFN0b3JhZ2VTdHJhdGVneTxhbnk+IHtcblx0c3RhdGljIHJlYWRvbmx5IHN0cmF0ZWd5TmFtZTogc3RyaW5nID0gU3RvcmFnZVN0cmF0ZWdpZXMuSW5NZW1vcnk7XG5cdHJlYWRvbmx5IGtleUNoYW5nZXM6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cdGlzQXZhaWxhYmxlOiBib29sZWFuID0gdHJ1ZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nID0gSW5NZW1vcnlTdG9yYWdlU3RyYXRlZ3kuc3RyYXRlZ3lOYW1lO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoU3RyYXRlZ3lDYWNoZVNlcnZpY2UpIHByb3RlY3RlZCBjYWNoZTogU3RyYXRlZ3lDYWNoZVNlcnZpY2UpIHt9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gb2YodGhpcy5jYWNoZS5nZXQodGhpcy5uYW1lLCBrZXkpKTtcblx0fVxuXG5cdHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0dGhpcy5jYWNoZS5zZXQodGhpcy5uYW1lLCBrZXksIHZhbHVlKTtcblx0XHR0aGlzLmtleUNoYW5nZXMubmV4dChrZXkpO1xuXHRcdHJldHVybiBvZih2YWx1ZSk7XG5cdH1cblxuXHRkZWwoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHR0aGlzLmNhY2hlLmRlbCh0aGlzLm5hbWUsIGtleSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cblxuXHRjbGVhcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHR0aGlzLmNhY2hlLmNsZWFyKHRoaXMubmFtZSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQobnVsbCk7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cbn1cbiJdfQ==