import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService, StorageService } from '@alfresco/adf-core';

@Injectable()
export class DebugAppConfigService extends AppConfigService {

    constructor(private storage: StorageService, http: HttpClient) {
        super(http);
    }

    /** @override */
    get<T>(key: string): T {
        if (key === 'ecmHost' || key === 'bpmHost') {
            return <T> (<any> this.storage.getItem(key) || super.get<T>(key));
        }
        return super.get<T>(key);
    }

}
