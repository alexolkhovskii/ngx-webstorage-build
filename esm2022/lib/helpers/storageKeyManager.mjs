import { DefaultIsCaseSensitive, DefaultPrefix, DefaultSeparator } from '../constants/config';
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
export { StorageKeyManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZUtleU1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtd2Vic3RvcmFnZS9zcmMvbGliL2hlbHBlcnMvc3RvcmFnZUtleU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRzVGLE1BQWEsaUJBQWlCO2FBRXRCLFdBQU0sR0FBRyxhQUFhLENBQUM7YUFDdkIsY0FBUyxHQUFHLGdCQUFnQixDQUFDO2FBQzdCLG9CQUFlLEdBQUcsc0JBQXNCLENBQUM7SUFFaEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFXO1FBQzNCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xFLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQzFFLENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQVc7UUFDakMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBYztRQUM5QixpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWlCO1FBQ3BDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFlO1FBQ3RDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7SUFDNUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFrQztRQUM3RCxJQUFJLFFBQVEsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsSUFBSSxXQUFXLElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksZUFBZSxJQUFJLE1BQU07WUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O1NBL0JXLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVmYXVsdElzQ2FzZVNlbnNpdGl2ZSwgRGVmYXVsdFByZWZpeCwgRGVmYXVsdFNlcGFyYXRvcn0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbmZpZyc7XG5pbXBvcnQge05neFdlYnN0b3JhZ2VDb25maWd1cmF0aW9ufSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZUtleU1hbmFnZXIge1xuXHRcblx0c3RhdGljIHByZWZpeCA9IERlZmF1bHRQcmVmaXg7XG5cdHN0YXRpYyBzZXBhcmF0b3IgPSBEZWZhdWx0U2VwYXJhdG9yO1xuXHRzdGF0aWMgaXNDYXNlU2Vuc2l0aXZlID0gRGVmYXVsdElzQ2FzZVNlbnNpdGl2ZTtcblx0XG5cdHN0YXRpYyBub3JtYWxpemUocmF3OiBzdHJpbmcpIHtcblx0XHRyYXcgPSBTdG9yYWdlS2V5TWFuYWdlci5pc0Nhc2VTZW5zaXRpdmUgPyByYXcgOiByYXcudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gYCR7U3RvcmFnZUtleU1hbmFnZXIucHJlZml4fSR7U3RvcmFnZUtleU1hbmFnZXIuc2VwYXJhdG9yfSR7cmF3fWA7XG5cdH1cblx0XG5cdHN0YXRpYyBpc05vcm1hbGl6ZWRLZXkoa2V5OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4ga2V5LmluZGV4T2YoU3RvcmFnZUtleU1hbmFnZXIucHJlZml4ICsgU3RvcmFnZUtleU1hbmFnZXIuc2VwYXJhdG9yKSA9PT0gMDtcblx0fVxuXHRcblx0c3RhdGljIHNldFByZWZpeChwcmVmaXg6IHN0cmluZykge1xuXHRcdFN0b3JhZ2VLZXlNYW5hZ2VyLnByZWZpeCA9IHByZWZpeDtcblx0fVxuXHRcblx0c3RhdGljIHNldFNlcGFyYXRvcihzZXBhcmF0b3I6IHN0cmluZykge1xuXHRcdFN0b3JhZ2VLZXlNYW5hZ2VyLnNlcGFyYXRvciA9IHNlcGFyYXRvcjtcblx0fVxuXHRcblx0c3RhdGljIHNldENhc2VTZW5zaXRpdmUoZW5hYmxlOiBib29sZWFuKSB7XG5cdFx0U3RvcmFnZUtleU1hbmFnZXIuaXNDYXNlU2Vuc2l0aXZlID0gZW5hYmxlO1xuXHR9XG5cdFxuXHRzdGF0aWMgY29uc3VtZUNvbmZpZ3VyYXRpb24oY29uZmlnOiBOZ3hXZWJzdG9yYWdlQ29uZmlndXJhdGlvbikge1xuXHRcdGlmICgncHJlZml4JyBpbiBjb25maWcpIHRoaXMuc2V0UHJlZml4KGNvbmZpZy5wcmVmaXgpO1xuXHRcdGlmICgnc2VwYXJhdG9yJyBpbiBjb25maWcpIHRoaXMuc2V0U2VwYXJhdG9yKGNvbmZpZy5zZXBhcmF0b3IpO1xuXHRcdGlmICgnY2FzZVNlbnNpdGl2ZScgaW4gY29uZmlnKSB0aGlzLnNldENhc2VTZW5zaXRpdmUoY29uZmlnLmNhc2VTZW5zaXRpdmUpO1xuXHR9XG59XG4iXX0=