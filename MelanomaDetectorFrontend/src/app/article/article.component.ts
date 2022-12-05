import {Component, Input, OnInit} from '@angular/core';
import { ARTICLES } from '../interfaces/mockedArticles';
import { AppComponent } from "../app.component";
import { ArticlesComponent } from "../articles/articles.component";
import {Location} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  @Input() article = ARTICLES;
  index!: number;

  constructor( private appComponent: AppComponent, private articlesComponent: ArticlesComponent,  private location: Location) {}

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.index=this.articlesComponent.index
  }

  changeVisible(){
    this.articlesComponent.allArticleVisible = true;
    this.location.replaceState("/articles");
  }

}
