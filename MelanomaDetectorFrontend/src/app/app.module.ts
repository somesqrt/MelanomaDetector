import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material/expansion";
import { ArticleComponent } from './article/article.component';
import { MapComponent } from './map/map.component';
import { ScanPageComponent } from './scan-page/scan-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { RoutingComponent } from './routing/routing.component';
import { HomepageComponent } from './homepage/homepage.component'
import {MatCardModule} from "@angular/material/card";
import { ContactPageComponent } from './contact-page/contact-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MapComponent,
    ScanPageComponent,
    ArticlesComponent,
    RoutingComponent,
    HomepageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    GoogleMapsModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
