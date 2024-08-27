import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { Patient } from './patient';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthgaurdService } from './adminauthgaurd.service';
import { DocauthgaurdService } from './docauthgaurd.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
   {path:'admin',component:AdmindashComponent,canActivate:[AdminauthgaurdService]},
   {
    path:'appointmentlist',component:AppointmentComponent,canActivate:[AdminauthgaurdService]
  },{
    path:'create-appointment',component:CreateAppointmentComponent,canActivate:[AdminauthgaurdService]
  },
  {
    path:'home',component:HomeComponent
  },{
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'docdash',component:DocdashComponent,canActivate:[DocauthgaurdService]
  },{
    path:'create-patient',component:CreatePatientComponent,canActivate:[DocauthgaurdService]
  },
  {
    path:'medicinelist',component:MedicinelistComponent,canActivate:[DocauthgaurdService]
  },{
    path:'create-Medicine',component:CreateMedicineComponent,canActivate:[DocauthgaurdService]
  },{
    path:'update-patient/:id',component:UpdatePatientComponent,canActivate:[DocauthgaurdService]
  },{
    path:'view-patient/:id',component:ViewPatientComponent,canActivate:[DocauthgaurdService]
  },{
    path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DocauthgaurdService]
  },{
    path:'doclogin',component:DocloginComponent
  },{
    path:'adlogin',component:AdloginComponent
  },{
    path:"login",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
