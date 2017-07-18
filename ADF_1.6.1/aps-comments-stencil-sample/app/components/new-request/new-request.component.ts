import { Component, Input } from '@angular/core';
import { FormRenderingService } from 'ng2-activiti-form';
import { ProcessInstance } from 'ng2-activiti-processlist';
import { Router } from '@angular/router';
import { ProcessCommentsComponent } from '../custom-editor/custom-editor.component';

@Component({
    selector: 'app-new-request',
    templateUrl: './new-request.component.html',
    styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent {

    @Input()
    appId: number = null;

    constructor(public router: Router,
        private formRenderingService: FormRenderingService) {
        this.formRenderingService.setComponentTypeResolver('processcomments', () => ProcessCommentsComponent, true);
    }

    onStartProcessInstance(instance: ProcessInstance) {
        this.router.navigate(['/my-tasks']);
    }

}


