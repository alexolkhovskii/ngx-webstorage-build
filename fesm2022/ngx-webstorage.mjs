import { filter, switchMap, distinctUntilChanged, shareReplay, map } from 'rxjs/operators';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, PLATFORM_ID, Inject, Optional, APP_INITIALIZER, NgModule } from '@angular/core';
import { Subject, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

var StorageStrategies;
(function (StorageStrategies) {
    StorageStrategies["Local"] = "local_strategy";
    StorageStrategies["Session"] = "session_strategy";
    StorageStrategies["InMemory"] = "in_memory_strategy";
})(StorageStrategies || (StorageStrategies = {}));

class CompatHelper {
    static isStorageAvailable(storage) {
        let available = true;
        try {
            if (typeof storage === 'object') {
                storage.setItem('test-storage', 'foobar');
                storage.removeItem('test-storage');
            }
            else
                available = false;
        }
        catch (e) {
            available = false;
        }
        return available;
    }
}

function noop() { }

const DefaultPrefix = 'ngx-webstorage';
const DefaultSeparator = '|';
const DefaultIsCaseSensitive = false;

class StorageKeyManager {
    static { this.prefix = DefaultPrefix; }
    static { this.separator = DefaultSeparator; }
    static { this.isCaseSensitive = DefaultIsCaseSensitive; }
    static normalize(raw) {
        raw = StorageKeyManager.isCaseSensitive ? raw : raw.toLowerCase();
        return `${StorageKeyManager.prefix}${StorageKeyManager.separator}${raw}`;
    }
    static isNormalizedKey(key) {
        return key.indexOf(StorageKeyManager.prefix + StorageKeyManager.separator) === 0;
    }
    static setPrefix(prefix) {
        StorageKeyManager.prefix = prefix;
    }
    static setSeparator(separator) {
        StorageKeyManager.separator = separator;
    }
    static setCaseSensitive(enable) {
        StorageKeyManager.isCaseSensitive = enable;
    }
    static consumeConfiguration(config) {
        if ('prefix' in config)
            this.setPrefix(config.prefix);
        if ('separator' in config)
            this.setSeparator(config.separator);
        if ('caseSensitive' in config)
            this.setCaseSensitive(config.caseSensitive);
    }
}

class SyncStorage {
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

class AsyncStorage {
    constructor(strategy) {
        this.strategy = strategy;
    }
    retrieve(key) {
        return this.strategy.get(StorageKeyManager.normalize(key)).pipe(map((value) => typeof value === 'undefined' ? null : value));
    }
    store(key, value) {
        return this.strategy.set(StorageKeyManager.normalize(key), value);
    }
    clear(key) {
        return key !== undefined ? this.strategy.del(StorageKeyManager.normalize(key)) : this.strategy.clear();
    }
    getStrategyName() { return this.strategy.name; }
    observe(key) {
        key = StorageKeyManager.normalize(key);
        return this.strategy.keyChanges.pipe(filter((changed) => changed === null || changed === key), switchMap(() => this.strategy.get(key)), distinctUntilChanged(), shareReplay({ refCount: true, bufferSize: 1 }));
    }
}

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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StrategyCacheService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

const LOCAL_STORAGE = new InjectionToken('window_local_storage');
function getLocalStorage() {
    return (typeof window !== 'undefined') ? window.localStorage : null;
}
const LocalStorageProvider = { provide: LOCAL_STORAGE, useFactory: getLocalStorage };
const SESSION_STORAGE = new InjectionToken('window_session_storage');
function getSessionStorage() {
    return (typeof window !== 'undefined') ? window.sessionStorage : null;
}
const SessionStorageProvider = { provide: SESSION_STORAGE, useFactory: getSessionStorage };

class BaseSyncStorageStrategy {
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
    static { this.ɵfac = function LocalStorageStrategy_Factory(t) { return new (t || LocalStorageStrategy)(i0.ɵɵinject(LOCAL_STORAGE), i0.ɵɵinject(StrategyCacheService), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalStorageStrategy, factory: LocalStorageStrategy.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageStrategy, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCAL_STORAGE]
            }] }, { type: StrategyCacheService }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }]; }, null); })();

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
    static { this.ɵfac = function SessionStorageStrategy_Factory(t) { return new (t || SessionStorageStrategy)(i0.ɵɵinject(SESSION_STORAGE), i0.ɵɵinject(StrategyCacheService), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SessionStorageStrategy, factory: SessionStorageStrategy.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SessionStorageStrategy, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [SESSION_STORAGE]
            }] }, { type: StrategyCacheService }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }]; }, null); })();

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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InMemoryStorageStrategy, [{
        type: Injectable
    }], function () { return [{ type: StrategyCacheService, decorators: [{
                type: Inject,
                args: [StrategyCacheService]
            }] }]; }, null); })();

const STORAGE_STRATEGIES = new InjectionToken('STORAGE_STRATEGIES');
const Strategies = [
    { provide: STORAGE_STRATEGIES, useClass: InMemoryStorageStrategy, multi: true },
    { provide: STORAGE_STRATEGIES, useClass: LocalStorageStrategy, multi: true },
    { provide: STORAGE_STRATEGIES, useClass: SessionStorageStrategy, multi: true },
];

const StorageStrategyStubName = 'stub_strategy';
class StorageStrategyStub {
    constructor(name) {
        this.keyChanges = new Subject();
        this.store = {};
        this._available = true;
        this.name = name || StorageStrategyStubName;
    }
    get isAvailable() {
        return this._available;
    }
    get(key) {
        return of(this.store[key]);
    }
    set(key, value) {
        this.store[key] = value;
        this.keyChanges.next(key);
        return of(value);
    }
    del(key) {
        delete this.store[key];
        this.keyChanges.next(key);
        return of(null);
    }
    clear() {
        this.store = {};
        this.keyChanges.next(null);
        return of(null);
    }
}

class StorageStub {
    constructor() {
        this.store = {};
    }
    get length() {
        return Object.keys(this.store).length;
    }
    clear() {
        this.store = {};
    }
    getItem(key) {
        return this.store[key] || null;
    }
    key(index) {
        return Object.keys(this.store)[index];
    }
    removeItem(key) {
        delete this.store[key];
    }
    setItem(key, value) {
        this.store[key] = value;
    }
}

const InvalidStrategyError = 'invalid_strategy';
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StrategyIndex, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STORAGE_STRATEGIES]
            }] }]; }, null); })();

class LocalStorageService extends SyncStorage {
}
function buildService$1(index) {
    const strategy = index.indexStrategy(StorageStrategies.Local);
    return new SyncStorage(strategy);
}
const LocalStorageServiceProvider = {
    provide: LocalStorageService,
    useFactory: buildService$1,
    deps: [StrategyIndex]
};

class SessionStorageService extends SyncStorage {
}
function buildService(index) {
    const strategy = index.indexStrategy(StorageStrategies.Session);
    return new SyncStorage(strategy);
}
const SessionStorageServiceProvider = {
    provide: SessionStorageService,
    useFactory: buildService,
    deps: [StrategyIndex]
};

class DecoratorBuilder {
    static buildSyncStrategyDecorator(strategyName, prototype, propName, key, defaultValue = null) {
        const rawKey = key || propName;
        let storageKey;
        Object.defineProperty(prototype, propName, {
            get: function () {
                let value;
                StrategyIndex.get(strategyName).get(getKey()).subscribe((result) => value = result);
                return value === undefined ? defaultValue : value;
            },
            set: function (value) {
                StrategyIndex.get(strategyName).set(getKey(), value).subscribe(noop);
            }
        });
        function getKey() {
            if (storageKey !== undefined)
                return storageKey;
            return storageKey = StorageKeyManager.normalize(rawKey);
        }
    }
}

function LocalStorage(key, defaultValue) {
    return function (prototype, propName) {
        DecoratorBuilder.buildSyncStrategyDecorator(StorageStrategies.Local, prototype, propName, key, defaultValue);
    };
}
function SessionStorage(key, defaultValue) {
    return function (prototype, propName) {
        DecoratorBuilder.buildSyncStrategyDecorator(StorageStrategies.Session, prototype, propName, key, defaultValue);
    };
}

const Services = [
    LocalStorageServiceProvider,
    SessionStorageServiceProvider
];

const LIB_CONFIG = new InjectionToken('ngx_webstorage_config');
function appInit(index) {
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
    static { this.ɵfac = function NgxWebstorageModule_Factory(t) { return new (t || NgxWebstorageModule)(i0.ɵɵinject(StrategyIndex), i0.ɵɵinject(LIB_CONFIG, 8)); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxWebstorageModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({}); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxWebstorageModule, [{
        type: NgModule,
        args: [{}]
    }], function () { return [{ type: StrategyIndex }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [LIB_CONFIG]
            }] }]; }, null); })();

/*
 * Public API Surface of ngx-webstorage
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AsyncStorage, CompatHelper, InMemoryStorageStrategy, InvalidStrategyError, LIB_CONFIG, LOCAL_STORAGE, LocalStorage, LocalStorageService, LocalStorageStrategy, NgxWebstorageModule, SESSION_STORAGE, STORAGE_STRATEGIES, SessionStorage, SessionStorageService, SessionStorageStrategy, StorageStrategies, StorageStrategyStub, StorageStrategyStubName, StorageStub, StrategyCacheService, StrategyIndex, SyncStorage, appInit };
//# sourceMappingURL=ngx-webstorage.mjs.map
