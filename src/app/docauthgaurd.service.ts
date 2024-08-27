import { Injectable } from '@angular/core';
import { AdminauthService } from './adminauth.service';
import { Router } from '@angular/router';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DocauthgaurdService {

  constructor(private docauthService:DocauthService,private router:Router) { }

  canActivate(){
    if(this.docauthService.isUserLoggedIn()){

      return true;
    }else{

      this.router.navigate(['docdash'])
      return false;
    }
  }
}
