import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MelanomaDetectorFrontend';
  file:any
  reader = new FileReader();

  getFile(event: any){
    this.file = event.target.files[0];

    this.reader.readAsDataURL(event.target.files[0]);
    this.reader.onload = (_event) => {
      this.file = this.reader.result;
    }

    console.log('file', this.file);
  }



  uploadFile(){

  }
}
