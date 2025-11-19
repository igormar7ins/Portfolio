import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpClient = inject(HttpClient);
  profile: ProfileModel | null = null;

  public loadProfile(): Observable<ProfileModel> {
    return this.httpClient.get<ProfileModel>(environment.profileUrl).pipe(tap((data) => {
      this.profile = data;
    }));
  }
}
