import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
 
  orderForm : FormGroup = new FormGroup({
     details : new FormControl (''),
     phone : new FormControl (''),
     city : new FormControl ('') 
  })

  handleForm(): void{
    console.log(this.orderForm.value);
    
  }
}
