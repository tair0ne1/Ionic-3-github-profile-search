import { Repository } from './../../models/repository.model';
import { Profile } from './../../models/profile.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubProvider {

  private baseUrl = "https://api.github.com/users";
  private reposUrl = "repos";

  constructor(private http: HttpClient) { }

  getUserInformation(username: string): Observable<Profile> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .catch(this.handleError);
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return Observable.throw(error || "Server error.");
  }

}
