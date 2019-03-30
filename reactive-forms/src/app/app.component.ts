import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 registrationForm = new FormGroup({
     userName: new FormControl('Zoriana'),
     password: new FormControl(''),
     confirmPassword: new FormControl(''),
     address: new FormGroup({
         city: new FormControl('New York'),
         state: new FormControl('New York'),
         postalCode: new FormControl('')
     })
 });
 loadApiData(){
     this.registrationForm.patchValue({
             userName: 'Dean',
             password: '1234',
             confirmPassword: '1234'
     })
 }
}
