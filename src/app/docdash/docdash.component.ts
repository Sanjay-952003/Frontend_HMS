import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
searchText: any;
searchPatients() {
throw new Error('Method not implemented.');
}

  constructor(private patientService:PatientService,private router:Router,private docauthService:DocauthService){}
  patients:Patient[]=[];
  ngOnInit():void{
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

  searchPatient(){

  }

  update(id:number){
    this.router.navigate(['update-patient',id])
  }

  delete(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  view(id:number){
    this.router.navigate(['view-patient',id])
  }

  logout(){
    this.docauthService.logOut();
    this.router.navigate(['home'])
  }
}
