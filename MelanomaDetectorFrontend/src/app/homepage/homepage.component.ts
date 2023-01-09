import { Component, OnInit } from '@angular/core';
import {
  notification,
  slideInLeft,
  slideInLeft2,
  slideInRight,
  slideInRight2,
  slideInTop2,
  slideOutTopLinks, slideOutTopLinks2
} from "../animation/animations";
import { AppComponent } from "../app.component";
import {Clipboard} from "@angular/cdk/clipboard";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [slideInLeft, slideInRight, slideInLeft2,slideInRight2, slideInTop2, slideOutTopLinks, notification, slideOutTopLinks2],
})

export class HomepageComponent implements OnInit{
  title = 'MelanomaDetectorFrontend';
  about1IsVisible: boolean = false
  about2IsVisible: boolean = false
  manUnvisible: boolean = true
  mapVisible: boolean = false;
  ScanPageVisible: boolean = false;
  HTMLElementContact = document.getElementById('conctactUsField');
  constructor( private clipboard: Clipboard, private appComponent:AppComponent, private uploadService: UploadService){}

  ngOnInit(): void {
      this.uploadService.getArticles()
    }

  scrollToElement(): void {
    this.HTMLElementContact!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  goToScanPage(){

    if(this.ScanPageVisible == false){
      this.ScanPageVisible = true;
      this.appComponent.navBarVisible=false;
    }else{
      this.ScanPageVisible = false;
      this.appComponent.navBarVisible=true;
    }
  }

  changeMapVisible(){
    if(this.mapVisible == false){
      this.ScanPageVisible = false;
      this.manUnvisible = false;
      this.appComponent.navBarVisible=true;
      setTimeout(() => {
        this.mapVisible = true;
      }, 500)

    }else{
      this.mapVisible = false;
      setTimeout(() => {
        this.manUnvisible = true;
      }, 500)

    }
  }

  showAbout1() {
    if( this.about1IsVisible == true){
      this.about1IsVisible = false;
    }else{
      this.about1IsVisible = true;
    }
  }

  showAbout2(){
    if( this.about2IsVisible == true){
      this.about2IsVisible = false;
    }else{
      this.about2IsVisible = true;
    }
  }
}
