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
  navBarVisible: boolean = true;
  constructor(){}

  scrollToElement(): void {
  }


}


