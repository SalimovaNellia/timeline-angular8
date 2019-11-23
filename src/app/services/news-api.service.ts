import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  API_KEY = 'abe0302406a54cda8a3807afbcdef117';

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    // The HttpClient get() method is designed to send HTTP GET requests. The syntax is as follows:
    //
    //   get(url: string, options: {
    //   headers?: HttpHeaders;
    //   observe: 'response';
    //   params?: HttpParams;
    //   reportProgress?: boolean;
    //   responseType?: 'json';
    //   withCredentials?: boolean;
    // }): Observable<HttpResponse<Object>>;
  }
}
