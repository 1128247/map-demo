enum CacheType {
  LocalStorage,
  SessionStorage
}

class LocalCache {
  setCache(key: string, value: any, cacheType: CacheType) {
    if (CacheType.LocalStorage === cacheType) {
      localStorage.setItem(key, JSON.stringify(value));
    } else if (CacheType.SessionStorage === cacheType) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }
  getCache(key: string, cacheType: CacheType) {
    let value = undefined;
    if (CacheType.LocalStorage === cacheType) {
      value = localStorage.getItem(key);
    } else if (CacheType.SessionStorage === cacheType) {
      value = sessionStorage.getItem(key);
    }
    if (value) value = JSON.parse(value);
    return value;
  }
  clearCache() {
    localStorage.clear();
    sessionStorage.clear();
  }
  deleteCache(key: string, cacheType: CacheType) {
    if (CacheType.LocalStorage === cacheType) {
      localStorage.removeItem(key);
    } else if (CacheType.SessionStorage === cacheType) {
      sessionStorage.removeItem(key);
    }
  }
}
const localCacheInstance = new LocalCache();

export { localCacheInstance, CacheType };
