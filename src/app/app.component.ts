import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Base64EncodingService } from './services/base64-encoding.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base64encoder';
  form: FormGroup = this.formBuilder.group({
    base64: [''],
  });
  constructor( private formBuilder: FormBuilder, private api:Base64EncodingService){
  }
  // save(){
  //   this.api.post('http://localhost:8080/api/encode',{ text: this.form.getRawValue().base64}).subscribe(x=>{
  //     this.result = x;

  //   })
  // }
  data: string = '';
  result: string = '';
  isProcessing: boolean = false;


  encode() {
    this.isProcessing = true;
    this.result = '';
    this.api.encode(this.data).subscribe((char: any) => {
        this.result += char;
        this.isProcessing = false;
    });
  }

  cancel() {
    // Implement logic to cancel the backend process (if possible)
    this.isProcessing = false;
  }
  
}
