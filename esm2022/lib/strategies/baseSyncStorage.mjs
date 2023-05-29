import { of, Subject } from 'rxjs';
import { CompatHelper } from '../helpers/compat';
export class BaseSyncStorageStrategy {
    constructor(storage, cache) {
        this.storage = storage;
        this.cache = cache;
        this.keyChanges = new Subject();
    }
    get isAvailable() {
        if (this._isAvailable === undefined)
            this._isAvailable = CompatHelper.isStorageAvailable(this.storage);
        return this._isAvailable;
    }
    get(key) {
        let data = this.cache.get(this.name, key);
        if (data !== undefined)
            return of(data);
        try {
            const item = this.storage.getItem(key);
            if (item !== null) {
                data = JSON.parse(item);
                this.cache.set(this.name, key, data);
            }
        }
        catch (err) {
            console.warn(err);
        }
        return of(data);
    }
    set(key, value) {
        const data = JSON.stringify(value);
        this.storage.setItem(key, data);
        this.cache.set(this.name, key, value);
        this.keyChanges.next(key);
        return of(value);
    }
    del(key) {
        this.storage.removeItem(key);
        this.cache.del(this.name, key);
        this.keyChanges.next(key);
        return of(null);
    }
    clear() {
        this.storage.clear();
        this.cache.clear(this.name);
        this.keyChanges.next(null);
        return of(null);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVN5bmNTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXdlYnN0b3JhZ2Uvc3JjL2xpYi9zdHJhdGVnaWVzL2Jhc2VTeW5jU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWEsRUFBRSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUU3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFnQix1QkFBdUI7SUFJNUMsWUFBc0IsT0FBbUIsRUFBWSxLQUEyQjtRQUExRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVksVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFIdkUsZUFBVSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRzhCLENBQUM7SUFJcEYsSUFBSSxXQUFXO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkcsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLEtBQUssU0FBUztZQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhDLElBQUk7WUFDSCxNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNyQztTQUNEO1FBQUMsT0FBTSxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUMxQixNQUFNLElBQUksR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ3l9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9zdG9yYWdlU3RyYXRlZ3knO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1N0cmF0ZWd5Q2FjaGVTZXJ2aWNlfSBmcm9tICcuLi9jb3JlL3N0cmF0ZWd5Q2FjaGUnO1xuaW1wb3J0IHtDb21wYXRIZWxwZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29tcGF0JztcbmltcG9ydCB7V2ViU3RvcmFnZX0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL3dlYlN0b3JhZ2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVN5bmNTdG9yYWdlU3RyYXRlZ3kgaW1wbGVtZW50cyBTdG9yYWdlU3RyYXRlZ3k8YW55PiB7XG5cdHJlYWRvbmx5IGtleUNoYW5nZXM6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cdGFic3RyYWN0IHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmFnZTogV2ViU3RvcmFnZSwgcHJvdGVjdGVkIGNhY2hlOiBTdHJhdGVneUNhY2hlU2VydmljZSkge31cblxuXHRwcm90ZWN0ZWQgX2lzQXZhaWxhYmxlOiBib29sZWFuO1xuXG5cdGdldCBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5faXNBdmFpbGFibGUgPT09IHVuZGVmaW5lZCkgdGhpcy5faXNBdmFpbGFibGUgPSBDb21wYXRIZWxwZXIuaXNTdG9yYWdlQXZhaWxhYmxlKHRoaXMuc3RvcmFnZSk7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQXZhaWxhYmxlO1xuXHR9XG5cdFxuXHRnZXQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGxldCBkYXRhOiBhbnkgPSB0aGlzLmNhY2hlLmdldCh0aGlzLm5hbWUsIGtleSk7XG5cdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkgcmV0dXJuIG9mKGRhdGEpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cdFx0XHRpZiAoaXRlbSAhPT0gbnVsbCkge1xuXHRcdFx0XHRkYXRhID0gSlNPTi5wYXJzZShpdGVtKTtcblx0XHRcdFx0dGhpcy5jYWNoZS5zZXQodGhpcy5uYW1lLCBrZXksIGRhdGEpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZXJyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2YoZGF0YSk7XG5cdH1cblxuXHRzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGRhdGE6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHR0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xuXHRcdHRoaXMuY2FjaGUuc2V0KHRoaXMubmFtZSwga2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHRyZXR1cm4gb2YodmFsdWUpO1xuXHR9XG5cblx0ZGVsKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0dGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHR0aGlzLmNhY2hlLmRlbCh0aGlzLm5hbWUsIGtleSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cblxuXHRjbGVhcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHR0aGlzLnN0b3JhZ2UuY2xlYXIoKTtcblx0XHR0aGlzLmNhY2hlLmNsZWFyKHRoaXMubmFtZSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQobnVsbCk7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cbn1cbiJdfQ==