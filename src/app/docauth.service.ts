import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="sanjay" && password=="1234"){
      //this is a temprorary storage by angular
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      alert("Worng Crediential");
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User Logged In");
    let user=sessionStorage.getItem('username');
    console.log(user);
    return !(user==null);
  }

  logOut(){
    console.log("User Logged Out")
    sessionStorage.removeItem('username');
    
  }
}
