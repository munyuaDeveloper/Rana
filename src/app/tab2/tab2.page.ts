import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Activity} from '../interfices/types';
import {ActivityService} from '../services/activity.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    activityList: Observable<Activity[]>;

    constructor(private activityService: ActivityService) {
        this.activityList = activityService.getActivities();
    }
}
