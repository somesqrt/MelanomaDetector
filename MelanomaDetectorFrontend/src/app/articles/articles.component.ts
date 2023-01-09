import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ARTICLES} from "../interfaces/mockedArticles";
import {AppComponent} from "../app.component";
import { ArticleComponent } from "../article/article.component";
import {ActivatedRoute, Router} from "@angular/router";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss', "./articles.component.css"]
})
export class ArticlesComponent implements OnInit{

  constructor(private uploadService: UploadService, private appComponent: AppComponent, public router:Router, private location: Location) {}

  @Input() article = this.uploadService.shortResult;
  index!: number ;
  slug!: string;
  indexString!: string;
  allArticleVisible: boolean = true;

  changeVisible(){
    if(this.allArticleVisible == true){
      this.allArticleVisible = false
    }else{
      this.allArticleVisible = true
    }
  }

  show(something: any){
    console.log("Vot slug cel = " + something.slug)
    this.slug = something.slug;
    this.changeVisible()
    //this.indexString= String(this.index);
    this.location.replaceState("/articles/" + this.slug);
  }

  ngOnInit(): void {
    let url = this.router.url;
    console.log(url)
    url = url.slice(10, url.length);
    if(url != ""){
      this.slug = url;
      this.changeVisible()
    }
    this.uploadService.getArticles()
  }
}
