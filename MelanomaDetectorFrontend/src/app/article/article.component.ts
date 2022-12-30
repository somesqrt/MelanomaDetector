import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { ARTICLES } from '../interfaces/mockedArticles';
import { AppComponent } from "../app.component";
import { ArticlesComponent } from "../articles/articles.component";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {UploadService} from "../upload.service";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent implements OnInit{

  constructor( private appComponent: AppComponent, private articlesComponent: ArticlesComponent,  private location: Location, public uploadService: UploadService) {}

  index!: number;
  slug!: string;

   ngOnInit(): void {
    if(this.uploadService.shortResult.length == 0){
      console.log("zakazuvaju")
      this.uploadService.getArticles()
      console.log("ja vupolnilsa")
      setTimeout(() => {
        this.getArt();
      }, 1000)
    }else{
      this.getArt();
    }


  }

  getArt(){
    for (let i = 0; i < this.uploadService.shortResult.length; i++) {
      if(this.uploadService.shortResult[i].slug == this.articlesComponent.slug){
        this.slug =  this.uploadService.shortResult[i].slug;
      }
    }
    window.scrollTo(0,0)
    this.index=this.articlesComponent.index
    this.uploadService.getArticle(this.slug);

  }

  changeVisible(){
    this.articlesComponent.allArticleVisible = true;
    this.location.replaceState("/articles");
  }

}
