import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FullArticle, ShortArticle} from "./interfaces/Article";
import {Specialist} from "./interfaces/Specialist";
import {ARTICLES} from "./interfaces/mockedArticles";

export interface Response {
  result: any
  percentage: any
}

export interface ResponseShortArticle {
  data: ShortArticle[];
}

export interface ResponseSpecialist {
  data: Specialist[];
}

export interface ResponseFullArticle {
  authors: string,
  category: string,
  date: string,
  html_content: string,
  id: number,
  image: string,
  language: string,
  short_description: string,
  slug: string,
  source: string,
  title: string,
  url_source: string
}

@Injectable({
  providedIn: 'root'
})

export class UploadService {

  //new

  answer = new Map<string, number>();

  constructor(private httpClient: HttpClient) { }

  shortResult = new Array<ShortArticle>()

  public fullResult: ResponseFullArticle = <ResponseFullArticle>{}

  specialistResult = new Array<Specialist>()

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    this.httpClient.post<Response>('http://melanoma.science.upjs.sk/backend/v1/clasify', formParams).subscribe(data =>{
      console.log(data);
      this.answer.set(data.result, data.percentage)
    })

    return this.answer;
  }

  public getArticles(){
    this.httpClient.get<ResponseShortArticle>('http://melanoma.science.upjs.sk/backend/v1/article').subscribe(data =>{
      console.log("vyplnaju")
      this.shortResult = data.data;
    })
    console.log(this.shortResult)
  }

  public getArticle(slug: String){
    this.httpClient.get<ResponseFullArticle>('http://melanoma.science.upjs.sk/backend/v1/article/' + slug).subscribe(data =>{
      console.log("first")
      console.log(data);
      this.fullResult = data;
      console.log("second")
      console.log(this.fullResult);
    })

  }

  public getSpecialists(){
    this.httpClient.get<ResponseSpecialist>('http://melanoma.science.upjs.sk/backend/v1/specialist').subscribe(data =>{
      console.log(data);
      this.specialistResult = data.data;
    })
    return this.specialistResult
  }
}
