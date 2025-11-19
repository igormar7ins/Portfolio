import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpClient = inject(HttpClient);
  private readonly _profile = signal<ProfileModel | null>(null);
  public readonly profile = this._profile.asReadonly();

  public loadProfile(): Observable<ProfileModel> {
    return this.httpClient.get<ProfileModel>(environment.profileUrl).pipe(
      tap((data) => {
        this._profile.set(data);
      })
    );
  }
}
