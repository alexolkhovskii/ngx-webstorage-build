import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
class StrategyCacheService {
    constructor() {
        this.caches = {};
    }
    get(strategyName, key) {
        return this.getCacheStore(strategyName)[key];
    }
    set(strategyName, key, value) {
        this.getCacheStore(strategyName)[key] = value;
    }
    del(strategyName, key) {
        delete this.getCacheStore(strategyName)[key];
    }
    clear(strategyName) {
        this.caches[strategyName] = {};
    }
    getCacheStore(strategyName) {
        if (strategyName in this.caches)
            return this.caches[strategyName];
        return this.caches[strategyName] = {};
    }
    static { this.ɵfac = function StrategyCacheService_Factory(t) { return new (t || StrategyCacheService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StrategyCacheService, factory: StrategyCacheService.ɵfac, providedIn: 'root' }); }
}
export { StrategyCacheService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StrategyCacheService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXRlZ3lDYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC13ZWJzdG9yYWdlL3NyYy9saWIvY29yZS9zdHJhdGVneUNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBTXpDLE1BQ2Esb0JBQW9CO0lBRGpDO1FBR1csV0FBTSxHQUFzQyxFQUFFLENBQUM7S0FzQnpEO0lBcEJBLEdBQUcsQ0FBQyxZQUFvQixFQUFFLEdBQVc7UUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxHQUFHLENBQUMsWUFBb0IsRUFBRSxHQUFXLEVBQUUsS0FBVTtRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRUQsR0FBRyxDQUFDLFlBQW9CLEVBQUUsR0FBVztRQUNwQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFvQjtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQW1CLENBQUM7SUFDakQsQ0FBQztJQUVTLGFBQWEsQ0FBQyxZQUFvQjtRQUMzQyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBbUIsQ0FBQztJQUN4RCxDQUFDO3FGQXZCVyxvQkFBb0I7dUVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRFIsTUFBTTs7U0FDbEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsVUFBVTtlQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyYXRlZ3lDYWNoZSB7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgU3RyYXRlZ3lDYWNoZVNlcnZpY2Uge1xuXG5cdHByb3RlY3RlZCBjYWNoZXM6IHsgW25hbWU6IHN0cmluZ106IFN0cmF0ZWd5Q2FjaGUgfSA9IHt9O1xuXG5cdGdldChzdHJhdGVneU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDYWNoZVN0b3JlKHN0cmF0ZWd5TmFtZSlba2V5XTtcblx0fVxuXG5cdHNldChzdHJhdGVneU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLmdldENhY2hlU3RvcmUoc3RyYXRlZ3lOYW1lKVtrZXldID0gdmFsdWU7XG5cdH1cblxuXHRkZWwoc3RyYXRlZ3lOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ2V0Q2FjaGVTdG9yZShzdHJhdGVneU5hbWUpW2tleV07XG5cdH1cblxuXHRjbGVhcihzdHJhdGVneU5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuY2FjaGVzW3N0cmF0ZWd5TmFtZV0gPSB7fSBhcyBTdHJhdGVneUNhY2hlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldENhY2hlU3RvcmUoc3RyYXRlZ3lOYW1lOiBzdHJpbmcpOiBTdHJhdGVneUNhY2hlIHtcblx0XHRpZiAoc3RyYXRlZ3lOYW1lIGluIHRoaXMuY2FjaGVzKSByZXR1cm4gdGhpcy5jYWNoZXNbc3RyYXRlZ3lOYW1lXTtcblx0XHRyZXR1cm4gdGhpcy5jYWNoZXNbc3RyYXRlZ3lOYW1lXSA9IHt9IGFzIFN0cmF0ZWd5Q2FjaGU7XG5cdH1cbn1cbiJdfQ==