import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Response {
  result: any
  percentage: any
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  answer = new Map<string, number>();

  constructor(private httpClient: HttpClient,) { }

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    this.httpClient.post<Response>('http://127.0.0.1:5000//v1/clasify', formParams).subscribe(data =>{
      console.log(data);
      this.answer.set(data.result, data.percentage)
    })

    return this.answer;
  }
}
