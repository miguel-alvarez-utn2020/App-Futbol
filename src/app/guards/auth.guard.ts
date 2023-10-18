import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService, TOKEN, USER} from '../pages/services/auth.service';
import { StorageService } from '../pages/services/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private router = inject(Router)
  private authService = inject(AuthService);
  private storageService = inject(StorageService);

  constructor(
   
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const token = this.storageService.getItem(TOKEN);
    if(!token) {
        this.router.navigateByUrl('/');
        return false
    };
 
      this.authService.checkToken(token).subscribe((response:any) => {
        if(response.ok && response.user){
            return true;
        }
        this.router.navigateByUrl('/');  
        return false;
        
      }, error => new Error(error.message));
    
    return true;
  }
}
