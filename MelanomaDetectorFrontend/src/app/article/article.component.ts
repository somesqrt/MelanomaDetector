import {Component, Input, OnInit} from '@angular/core';
import { ARTICLES } from '../interfaces/mockedArticles';
import { AppComponent } from "../app.component";
import { ArticlesComponent } from "../articles/articles.component";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  @Input() article = ARTICLES;
  index!: number;

  constructor( private appComponent: AppComponent, private articlesComponent: ArticlesComponent) {}

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.index=this.articlesComponent.index
  }

  changeVisible(){
    this.articlesComponent.allArticleVisible = true;
  }

}
