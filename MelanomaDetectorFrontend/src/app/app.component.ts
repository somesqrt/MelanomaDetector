import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatExpansionModule} from '@angular/material/expansion';
import {trigger,stagger, state, style, transition, animate } from '@angular/animations';
import { Clipboard } from '@angular/cdk/clipboard';
import {Article} from "./interfaces/Article";
import {
  slideInLeft,
  slideInRight,
  slideInLeft2,
  slideInRight2,
  slideInTop2,
  slideOutTopLinks,
  notification, slideOutTopLinks2
} from "./animation/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInLeft, slideInRight, slideInLeft2,slideInRight2, slideInTop2, slideOutTopLinks, notification, slideOutTopLinks2],

})
export class AppComponent{
  notificate: boolean = false;
  title = 'MelanomaDetectorFrontend';
  about1IsVisible: boolean = false
  about2IsVisible: boolean = false

  mapVisible: boolean = false;
  ScanPageVisible: boolean = false;

  constructor( private clipboard: Clipboard){}

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  goToScanPage(){

    if(this.ScanPageVisible == false){
      this.ScanPageVisible = true;
    }else{
      this.ScanPageVisible = false;

    }
  }

  changeMapVisible(){
    if(this.mapVisible == false){
      this.ScanPageVisible = false;
      this.mapVisible = true;
    }else{
      this.mapVisible = false;
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


