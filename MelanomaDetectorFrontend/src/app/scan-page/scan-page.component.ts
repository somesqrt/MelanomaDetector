import { Component, OnInit } from '@angular/core';
import {UploadService} from "../upload.service";
import { AppComponent } from "../app.component";
import {
  slideInLeft,
  slideInRight,
  slideInLeft2,
  slideInRight2,
  slideInTop2,
  slideOutTopLinks,
  notification, slideOutTopLinks2
} from "../animation/animations";
@Component({
  selector: 'app-scan-page',
  templateUrl: './scan-page.component.html',
  styleUrls: ['./scan-page.component.css'],
  animations: [slideInLeft, slideInRight, slideInLeft2,slideInRight2, slideInTop2, slideOutTopLinks, notification, slideOutTopLinks2],
})
export class ScanPageComponent{
  file:any
  reader = new FileReader();
  answer = new Map<string, number>();
  per: string='';
  res: string='';
  huj:any = "huj";

  constructor(private uploadService: UploadService, private appComponent: AppComponent) {}

  GoToHomePage(){
    this.appComponent.goToScanPage()
  }

  GoToMapFromResult(){
    this.appComponent.changeMapVisible()
  }

  getFile(event: any){
    this.file = event.target.files[0];
    console.log('file', this.file);
    this.reader.readAsDataURL(event.target.files[0]);
    this.reader.onload = (_event) => {
      this.file = this.reader.result;
    }
    if(this.file){
      this.answer = this.uploadService.uploadfile(this.file)
    }
  }

  scan(file: any){
    if (file) {
      console.log('file', file);
      const iterator1 = this.answer.values();
      const mapIter = this.answer.keys();
      this.res = iterator1.next().value;
      this.per = mapIter.next().value;
      this.res = this.res.toString().slice(0,5);
    }
  }

  anime(){
    this.file = undefined;
    setInterval(() => {
      this.huj = undefined;
    }, 501)
    this.per=''; this.res ='';
  }

}
