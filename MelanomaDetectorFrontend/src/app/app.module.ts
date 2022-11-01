import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material/expansion";
import { ArticleComponent } from './article/article.component';
import { MapComponent } from './map/map.component';
import { ScanPageComponent } from './scan-page/scan-page.component';
import { GoogleMapsModule } from '@angular/google-maps'
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MapComponent,
    ScanPageComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        GoogleMapsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
