import {Injectable} from '@angular/core';
import {
  UrlTree,
  CanLoad,
  Router, Route
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../login/services/auth.service';

@Injectable({
              providedIn: 'root'
            })
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {
  }

  public canLoad(
    route: Route):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthorized.value) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

}
