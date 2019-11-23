import {Component, OnInit, Output} from '@angular/core';
import {NewsApiService} from '../services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.newsApiService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
