import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
              providedIn: 'root'
            })
export class AuthService {
  public isAuthorized: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router) {
  }

  public Login(userName: string): void {
    this.isAuthorized.next(true);
    localStorage.setItem('userName', userName);
  }

  public Logout(): void {
    this.isAuthorized.next(false);
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}
