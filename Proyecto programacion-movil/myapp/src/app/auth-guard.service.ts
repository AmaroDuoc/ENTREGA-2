import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services/services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
 constructor(private router: Router, private auth: ServicesService) {}
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if (this.auth.autenticado){
    return true;
   } else{
    this.router.navigate(['/home']);
    return false
   }
 }
}
