/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlfrescoTranslationService, AlfrescoAuthenticationService, AlfrescoSettingsService, StorageService, LogService } from 'ng2-alfresco-core';

declare var document: any;

@Component({
    selector: 'alfresco-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
   searchTerm: string = '';

  ecmHost: string = 'http://127.0.0.1:8080';
  bpmHost: string = 'http://127.0.0.1:9999';

    constructor(private authService: AlfrescoAuthenticationService,
                private router: Router,
                private settingsService: AlfrescoSettingsService,
                private translateService: AlfrescoTranslationService,
                private storage: StorageService,
                private logService: LogService) {
        this.setEcmHost();
        this.setBpmHost();
        this.setProvider();

        if (translateService) {
            translateService.addTranslationFolder('app', 'resources');
        }
    }

    isAPageWithHeaderBar(): boolean {
        return location.pathname === '/login' || location.pathname === '/settings';
    }

    onLogout(event) {
        event.preventDefault();
        this.authService.logout()
            .subscribe(
                () => {
                    this.navigateToLogin();
                },
                (error: any) => {
                    if (error && error.response && error.response.status === 401) {
                        this.navigateToLogin();
                    } else {
                        this.logService.error('An unknown error occurred while logging out', error);
                        this.navigateToLogin();
                    }
                }
            );
    }

    navigateToLogin() {
        this.router.navigate(['/login']);
        this.hideDrawer();
    }
  
  onToggleSearch(event) {
    let expandedHeaderClass = 'header-search-expanded',
      header = document.querySelector('header');
    if (event.expanded) {
      header.classList.add(expandedHeaderClass);
    } else {
      header.classList.remove(expandedHeaderClass);
    }
  }
  
    changeLanguage(lang: string) {
        this.translateService.use(lang);
        this.hideDrawer();
    }

    hideDrawer() {
        // todo: workaround for drawer closing
        document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
    }

    private setEcmHost() {
        if (this.storage.hasItem(`ecmHost`)) {
            this.settingsService.ecmHost = this.storage.getItem(`ecmHost`);
            this.ecmHost = this.storage.getItem(`ecmHost`);
        } else {
            this.settingsService.ecmHost = this.ecmHost;
        }
    }

    private setBpmHost() {
        if (this.storage.hasItem(`bpmHost`)) {
            this.settingsService.bpmHost = this.storage.getItem(`bpmHost`);
            this.bpmHost = this.storage.getItem(`bpmHost`);
        } else {
            this.settingsService.bpmHost = this.bpmHost;
        }
    }

    private setProvider() {
        if (this.storage.hasItem(`providers`)) {
            this.settingsService.setProviders(this.storage.getItem(`providers`));
        }
    }
}
