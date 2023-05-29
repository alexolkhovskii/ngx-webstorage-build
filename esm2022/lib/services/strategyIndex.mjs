import { Subject } from 'rxjs';
import { Inject, Injectable, Optional } from '@angular/core';
import { STORAGE_STRATEGIES } from '../strategies';
import { StorageStrategies } from '../constants/strategy';
import * as i0 from "@angular/core";
export const InvalidStrategyError = 'invalid_strategy';
class StrategyIndex {
    static { this.index = {}; }
    constructor(strategies) {
        this.strategies = strategies;
        this.registration$ = new Subject();
        if (!strategies)
            strategies = [];
        this.strategies = strategies.reverse()
            .map((strategy, index, arr) => strategy.name)
            .map((name, index, arr) => arr.indexOf(name) === index ? index : null)
            .filter((index) => index !== null)
            .map((index) => strategies[index]);
    }
    static get(name) {
        if (!this.isStrategyRegistered(name))
            throw Error(InvalidStrategyError);
        let strategy = this.index[name];
        if (!strategy.isAvailable) {
            strategy = this.index[StorageStrategies.InMemory];
        }
        return strategy;
    }
    static set(name, strategy) {
        this.index[name] = strategy;
    }
    static clear(name) {
        if (name !== undefined)
            delete this.index[name];
        else
            this.index = {};
    }
    static isStrategyRegistered(name) {
        return name in this.index;
    }
    static hasRegistredStrategies() {
        return Object.keys(this.index).length > 0;
    }
    getStrategy(name) {
        return StrategyIndex.get(name);
    }
    indexStrategies() {
        this.strategies.forEach((strategy) => this.register(strategy.name, strategy));
    }
    indexStrategy(name, overrideIfExists = false) {
        if (StrategyIndex.isStrategyRegistered(name) && !overrideIfExists)
            return StrategyIndex.get(name);
        const strategy = this.strategies.find((strategy) => strategy.name === name);
        if (!strategy)
            throw new Error(InvalidStrategyError);
        this.register(name, strategy, overrideIfExists);
        return strategy;
    }
    register(name, strategy, overrideIfExists = false) {
        if (!StrategyIndex.isStrategyRegistered(name) || overrideIfExists) {
            StrategyIndex.set(name, strategy);
            this.registration$.next(name);
        }
    }
    static { this.ɵfac = function StrategyIndex_Factory(t) { return new (t || StrategyIndex)(i0.ɵɵinject(STORAGE_STRATEGIES, 8)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StrategyIndex, factory: StrategyIndex.ɵfac, providedIn: 'root' }); }
}
export { StrategyIndex };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StrategyIndex, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STORAGE_STRATEGIES]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXRlZ3lJbmRleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC13ZWJzdG9yYWdlL3NyYy9saWIvc2VydmljZXMvc3RyYXRlZ3lJbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBRXhELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLGtCQUFrQixDQUFDO0FBRXZELE1BQ2EsYUFBYTthQUVsQixVQUFLLEdBQTZDLEVBQUUsQUFBL0MsQ0FBZ0Q7SUFHNUQsWUFBOEQsVUFBa0M7UUFBbEMsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFGdkYsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUd2RCxJQUFJLENBQUMsVUFBVTtZQUFFLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFO2FBQ3BDLEdBQUcsQ0FBQyxDQUFDLFFBQThCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzthQUNsRSxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQzdFLE1BQU0sQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxL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QVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7O3NCQU1sQixRQUFROztzQkFBSSxNQUFNO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvc3RvcmFnZVN0cmF0ZWd5JztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTVE9SQUdFX1NUUkFURUdJRVN9IGZyb20gJy4uL3N0cmF0ZWdpZXMnO1xuaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ2llc30gZnJvbSAnLi4vY29uc3RhbnRzL3N0cmF0ZWd5JztcblxuZXhwb3J0IGNvbnN0IEludmFsaWRTdHJhdGVneUVycm9yID0gJ2ludmFsaWRfc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBTdHJhdGVneUluZGV4IHtcblxuXHRzdGF0aWMgaW5kZXg6IHsgW25hbWU6IHN0cmluZ106IFN0b3JhZ2VTdHJhdGVneTxhbnk+IH0gPSB7fTtcblx0cmVhZG9ubHkgcmVnaXN0cmF0aW9uJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KFNUT1JBR0VfU1RSQVRFR0lFUykgcHJvdGVjdGVkIHN0cmF0ZWdpZXM6IFN0b3JhZ2VTdHJhdGVneTxhbnk+W10pIHtcblx0XHRpZiAoIXN0cmF0ZWdpZXMpIHN0cmF0ZWdpZXMgPSBbXTtcblx0XHR0aGlzLnN0cmF0ZWdpZXMgPSBzdHJhdGVnaWVzLnJldmVyc2UoKVxuXHRcdFx0Lm1hcCgoc3RyYXRlZ3k6IFN0b3JhZ2VTdHJhdGVneTxhbnk+LCBpbmRleCwgYXJyKSA9PiBzdHJhdGVneS5uYW1lKVxuXHRcdFx0Lm1hcCgobmFtZTogc3RyaW5nLCBpbmRleCwgYXJyKSA9PiBhcnIuaW5kZXhPZihuYW1lKSA9PT0gaW5kZXggPyBpbmRleCA6IG51bGwpXG5cdFx0XHQuZmlsdGVyKChpbmRleDogbnVtYmVyKSA9PiBpbmRleCAhPT0gbnVsbClcblx0XHRcdC5tYXAoKGluZGV4OiBudW1iZXIpID0+IHN0cmF0ZWdpZXNbaW5kZXhdKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogU3RvcmFnZVN0cmF0ZWd5PGFueT4ge1xuXHRcdGlmICghdGhpcy5pc1N0cmF0ZWd5UmVnaXN0ZXJlZChuYW1lKSkgdGhyb3cgRXJyb3IoSW52YWxpZFN0cmF0ZWd5RXJyb3IpO1xuXHRcdGxldCBzdHJhdGVneTogU3RvcmFnZVN0cmF0ZWd5PGFueT4gPSB0aGlzLmluZGV4W25hbWVdO1xuXHRcdGlmICghc3RyYXRlZ3kuaXNBdmFpbGFibGUpIHtcblx0XHRcdHN0cmF0ZWd5ID0gdGhpcy5pbmRleFtTdG9yYWdlU3RyYXRlZ2llcy5Jbk1lbW9yeV07XG5cdFx0fVxuXHRcdHJldHVybiBzdHJhdGVneTtcblx0fVxuXG5cdHN0YXRpYyBzZXQobmFtZTogc3RyaW5nLCBzdHJhdGVneSk6IHZvaWQge1xuXHRcdHRoaXMuaW5kZXhbbmFtZV0gPSBzdHJhdGVneTtcblx0fVxuXG5cdHN0YXRpYyBjbGVhcihuYW1lPzogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKG5hbWUgIT09IHVuZGVmaW5lZCkgZGVsZXRlIHRoaXMuaW5kZXhbbmFtZV07XG5cdFx0ZWxzZSB0aGlzLmluZGV4ID0ge307XG5cdH1cblxuXHRzdGF0aWMgaXNTdHJhdGVneVJlZ2lzdGVyZWQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG5hbWUgaW4gdGhpcy5pbmRleDtcblx0fVxuXG5cdHN0YXRpYyBoYXNSZWdpc3RyZWRTdHJhdGVnaWVzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluZGV4KS5sZW5ndGggPiAwO1xuXHR9XG5cblx0cHVibGljIGdldFN0cmF0ZWd5KG5hbWU6IHN0cmluZyk6IFN0b3JhZ2VTdHJhdGVneTxhbnk+IHtcblx0XHRyZXR1cm4gU3RyYXRlZ3lJbmRleC5nZXQobmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgaW5kZXhTdHJhdGVnaWVzKCkge1xuXHRcdHRoaXMuc3RyYXRlZ2llcy5mb3JFYWNoKChzdHJhdGVneTogU3RvcmFnZVN0cmF0ZWd5PGFueT4pID0+IHRoaXMucmVnaXN0ZXIoc3RyYXRlZ3kubmFtZSwgc3RyYXRlZ3kpKTtcblx0fVxuXG5cdHB1YmxpYyBpbmRleFN0cmF0ZWd5KG5hbWU6IHN0cmluZywgb3ZlcnJpZGVJZkV4aXN0czogYm9vbGVhbiA9IGZhbHNlKTogU3RvcmFnZVN0cmF0ZWd5PGFueT4ge1xuXHRcdGlmIChTdHJhdGVneUluZGV4LmlzU3RyYXRlZ3lSZWdpc3RlcmVkKG5hbWUpICYmICFvdmVycmlkZUlmRXhpc3RzKSByZXR1cm4gU3RyYXRlZ3lJbmRleC5nZXQobmFtZSk7XG5cdFx0Y29uc3Qgc3RyYXRlZ3k6IFN0b3JhZ2VTdHJhdGVneTxhbnk+ID0gdGhpcy5zdHJhdGVnaWVzLmZpbmQoKHN0cmF0ZWd5OiBTdG9yYWdlU3RyYXRlZ3k8YW55PikgPT4gc3RyYXRlZ3kubmFtZSA9PT0gbmFtZSk7XG5cdFx0aWYgKCFzdHJhdGVneSkgdGhyb3cgbmV3IEVycm9yKEludmFsaWRTdHJhdGVneUVycm9yKTtcblx0XHR0aGlzLnJlZ2lzdGVyKG5hbWUsIHN0cmF0ZWd5LCBvdmVycmlkZUlmRXhpc3RzKTtcblx0XHRyZXR1cm4gc3RyYXRlZ3k7XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBzdHJhdGVneTogU3RvcmFnZVN0cmF0ZWd5PGFueT4sIG92ZXJyaWRlSWZFeGlzdHM6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdGlmICghU3RyYXRlZ3lJbmRleC5pc1N0cmF0ZWd5UmVnaXN0ZXJlZChuYW1lKSB8fCBvdmVycmlkZUlmRXhpc3RzKSB7XG5cdFx0XHRTdHJhdGVneUluZGV4LnNldChuYW1lLCBzdHJhdGVneSk7XG5cdFx0XHR0aGlzLnJlZ2lzdHJhdGlvbiQubmV4dChuYW1lKTtcblx0XHR9XG5cdH1cblxufVxuXG4iXX0=