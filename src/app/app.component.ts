import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'form-app';

  disclosureForm = new FormGroup({
  accountType: new FormControl(''),
  fName: new FormControl(''),
  mInitial: new FormControl(''),
  lName: new FormControl(''),
  email: new FormControl(''),
  phoneNum: new FormControl(''),
  formType: new FormControl('CRS'),
  version: new FormControl('1.1')
  });

  onSubmit() {
    console.log(this.disclosureForm.value);
    this.http.post('/api/userAcknowledge', this.disclosureForm.value)
      .subscribe((response)=>{
        console.log('Response: ',response);
      })
  }
}
