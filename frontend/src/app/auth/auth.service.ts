import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of } from 'rxjs';

interface CheckCookie {
  valid: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/backend/auth';

  constructor(private http: HttpClient) {}

  register(username: string, password: string, name: string) {
    const url = `${this.baseUrl}/register`;
    const data = { username, password, name };
    return this.http.post(url, data);
  }

  login(username: string, password: string) {
    const url = `${this.baseUrl}/login`;
    const data = { username, password };
    return this.http.post(url, data);
  }
  public getAuthCookie(): Observable<CheckCookie> {
    const check = this.http
      .get<CheckCookie>(this.baseUrl + '/check-cookie')
      .pipe(
        catchError((val) => {
          console.log('HERE');
          return of({ valid: false });
        })
      );
    return check;
  }
}
