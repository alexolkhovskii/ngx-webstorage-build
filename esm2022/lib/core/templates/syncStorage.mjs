import { noop } from '../../helpers/noop';
import { StorageKeyManager } from '../../helpers/storageKeyManager';
import { distinctUntilChanged, filter, shareReplay, switchMap } from 'rxjs/operators';
export class SyncStorage {
    constructor(strategy) {
        this.strategy = strategy;
    }
    retrieve(key) {
        let value;
        this.strategy.get(StorageKeyManager.normalize(key)).subscribe((result) => value = typeof result === 'undefined' ? null : result);
        return value;
    }
    store(key, value) {
        this.strategy.set(StorageKeyManager.normalize(key), value).subscribe(noop);
        return value;
    }
    clear(key) {
        if (key !== undefined)
            this.strategy.del(StorageKeyManager.normalize(key)).subscribe(noop);
        else
            this.strategy.clear().subscribe(noop);
    }
    getStrategyName() { return this.strategy.name; }
    observe(key) {
        key = StorageKeyManager.normalize(key);
        return this.strategy.keyChanges.pipe(filter((changed) => changed === null || changed === key), switchMap(() => this.strategy.get(key)), distinctUntilChanged(), shareReplay({ refCount: true, bufferSize: 1 }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtd2Vic3RvcmFnZS9zcmMvbGliL2NvcmUvdGVtcGxhdGVzL3N5bmNTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRixNQUFNLE9BQU8sV0FBVztJQUN2QixZQUFzQixRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtJQUNwRCxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDbkIsSUFBSSxLQUFVLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakksT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0UsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQVk7UUFDakIsSUFBSSxHQUFHLEtBQUssU0FBUztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxlQUFlLEtBQVksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFdkQsT0FBTyxDQUFDLEdBQVc7UUFDbEIsR0FBRyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxHQUFHLENBQUMsRUFDaEUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3ZDLG9CQUFvQixFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQzVDLENBQUM7SUFDSCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3JhZ2VTdHJhdGVneX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdG9yYWdlU3RyYXRlZ3knO1xuaW1wb3J0IHtub29wfSBmcm9tICcuLi8uLi9oZWxwZXJzL25vb3AnO1xuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdG9yYWdlU2VydmljZSc7XG5pbXBvcnQge1N0b3JhZ2VLZXlNYW5hZ2VyfSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2VLZXlNYW5hZ2VyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIFN5bmNTdG9yYWdlIGltcGxlbWVudHMgU3RvcmFnZVNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RyYXRlZ3k6IFN0b3JhZ2VTdHJhdGVneTxhbnk+KSB7XG5cdH1cblxuXHRyZXRyaWV2ZShrZXk6IHN0cmluZyk6IGFueSB7XG5cdFx0bGV0IHZhbHVlOiBhbnk7XG5cdFx0dGhpcy5zdHJhdGVneS5nZXQoU3RvcmFnZUtleU1hbmFnZXIubm9ybWFsaXplKGtleSkpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB2YWx1ZSA9IHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlc3VsdCk7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c3RvcmUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuXHRcdHRoaXMuc3RyYXRlZ3kuc2V0KFN0b3JhZ2VLZXlNYW5hZ2VyLm5vcm1hbGl6ZShrZXkpLCB2YWx1ZSkuc3Vic2NyaWJlKG5vb3ApO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGNsZWFyKGtleT86IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZClcblx0XHRcdHRoaXMuc3RyYXRlZ3kuZGVsKFN0b3JhZ2VLZXlNYW5hZ2VyLm5vcm1hbGl6ZShrZXkpKS5zdWJzY3JpYmUobm9vcCk7XG5cdFx0ZWxzZSB0aGlzLnN0cmF0ZWd5LmNsZWFyKCkuc3Vic2NyaWJlKG5vb3ApO1xuXHR9XG5cblx0Z2V0U3RyYXRlZ3lOYW1lKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMuc3RyYXRlZ3kubmFtZTsgfVxuXG5cdG9ic2VydmUoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGtleSA9IFN0b3JhZ2VLZXlNYW5hZ2VyLm5vcm1hbGl6ZShrZXkpO1xuXHRcdHJldHVybiB0aGlzLnN0cmF0ZWd5LmtleUNoYW5nZXMucGlwZShcblx0XHRcdGZpbHRlcigoY2hhbmdlZDogc3RyaW5nKSA9PiBjaGFuZ2VkID09PSBudWxsIHx8IGNoYW5nZWQgPT09IGtleSksXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT4gdGhpcy5zdHJhdGVneS5nZXQoa2V5KSksXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0c2hhcmVSZXBsYXkoe3JlZkNvdW50OiB0cnVlLCBidWZmZXJTaXplOiAxfSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==