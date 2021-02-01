import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../interfices/types';

@Injectable({
    providedIn: 'root'
})
export class ActivityService {

    constructor(private http: HttpClient) {
    }

    getActivity(activityID: string): Observable<Activity> {
        return this.http.get<Activity>(API + '/id/' + activityID);
    }

    getActivities(): Observable<Activity[]> {
        return this.http.get<Activity[]>(API);
    }
}

const API = 'https://orangevalleycaa.org/api/videos';
