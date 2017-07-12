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

import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule, AlfrescoSettingsService, AlfrescoAuthenticationService, StorageService, LogService } from 'ng2-alfresco-core';
import { ActivitiFormModule } from 'ng2-activiti-form';

@Component({
    selector: 'alfresco-app-demo',
    template: `
        <div *ngIf="!authenticated" style="color:#FF2323">
            Authentication failed to ip {{ host }} with user: admin, admin, you can still try to add a valid ticket to perform
            operations.
        </div>
        <hr>

        <label for="taskId"><b>Insert the taskId:</b></label><br>
        <input id="taskId" size="10" type="text" [(ngModel)]="taskId">
        <activiti-form [taskId]="taskId"></activiti-form>
    `
})

export class FormDemoComponent implements OnInit {

    taskId: number;
    authenticated: boolean;

    constructor(private authService: AlfrescoAuthenticationService,
                private settingsService: AlfrescoSettingsService,
                private storage: StorageService,
                private logService: LogService) {
        settingsService.setProviders('BPM');
    }

    public ngOnInit(): void {
        this.login();
    }

    login() {
        this.authService.login('admin', 'admin').subscribe(
            ticket => {
                this.logService.info(`Logged in with ticket ${ticket}`);
                this.ticket = this.authService.getTicketBpm();
                this.authenticated = true;
            },
            error => {
                this.logService.error(error);
                this.authenticated = false;
            });
    }
}

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        ActivitiFormModule.forRoot()
    ],
    declarations: [FormDemoComponent],
    bootstrap: [FormDemoComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
