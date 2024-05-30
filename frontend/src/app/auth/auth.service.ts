import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

interface CheckCookie {
  valid: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/backend/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, password: string, name: string) {
    const url = `${this.baseUrl}/register`;
    const data = { username, password, name };
    return this.http.post(url, data);
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'danik' && password === '12345') {
      localStorage.setItem('user', JSON.stringify({ username }));
      this.router.navigate(['/products']);
      return of(true);
    } else {
      return of(false);
    }
  }

  // public getAuthCookie(): Observable<CheckCookie> {
  //   const check = this.http
  //     .get<CheckCookie>(this.baseUrl + '/check-cookie')
  //     .pipe(
  //       catchError((val) => {
  //         console.log('HERE');
  //         return of({ valid: false });
  //       })
  //     );
  //   return check;
  // }
}
