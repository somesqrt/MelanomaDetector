import {Component, Input, OnInit} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { ARTICLES } from '../interfaces/mockedArticles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  @Input() article = ARTICLES;

  ngOnInit(): void {

    setInterval(() => {
    }, 2000)

  }


}
