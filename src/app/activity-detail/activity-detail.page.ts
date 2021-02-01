import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Activity} from '../interfices/types';
import {ActivityService} from '../services/activity.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.page.html',
    styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
    activityDetails: Observable<Activity>;

    constructor(private activityService: ActivityService, private route: ActivatedRoute) {
        const id = route.snapshot.params.id;
        this.activityDetails = activityService.getActivity(id);
    }

    ngOnInit() {

    }

}
