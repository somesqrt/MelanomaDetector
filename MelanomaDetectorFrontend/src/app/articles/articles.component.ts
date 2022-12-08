import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ARTICLES} from "../interfaces/mockedArticles";
import {AppComponent} from "../app.component";
import { ArticleComponent } from "../article/article.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  @Input() article = ARTICLES;
  index!: number ;
  indexString!: string;
  allArticleVisible: boolean = true;

  constructor( private appComponent: AppComponent, public router:Router, private location: Location) {}


  changeVisible(){
    if(this.allArticleVisible == true){
      this.allArticleVisible = false
    }else{
      this.allArticleVisible = true
    }
  }

  show(something: any){
    this.index = something.id;
    this.changeVisible()
    this.indexString= String(this.index);
    this.location.replaceState("/articles/" + this.index);

    console.log(this.indexString)
  }

  ngOnInit(): void {
    let url = this.router.url;
    url = url.slice(10, url.length);
    if(Number(url)){
      this.index = parseInt(url);
      this.changeVisible()
      this.indexString= String(this.index);
    }
  }
}
