import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
  medicine:Medicine=new Medicine();

  constructor(private medicineService:MedicineService,private router:Router){}



  createMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicine();
    })
  }

  onSubmit(){
    this.createMedicine();
  }
  
  goToMedicine(){
    this.router.navigate(['/medicinelist'])
  }
}
