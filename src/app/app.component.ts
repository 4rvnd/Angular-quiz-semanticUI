import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('BadLiver', 'http://Ishu.com', 'Ichuu', 'Born 2 yrs before me', 'The well known guy who topped IPUCET with just Phy and Chem', './assets/photo_2018-03-04_17-10-34.jpg'),
      new Article('UglyLiver', 'http://fullstack.io', 'Pichann', 'Born 2 months before me', 'The guy is Super dedicated and will one day get Jeongyeon', './assets/photo_2018-03-04_17-09-20.jpg'),
      new Article('GoodLiver', 'http://angular.io', 'Ambi', 'Born 2 microseconds before me', 'This guy is training hard in the harsh environments of NIIT barren lands', './assets/photo_2018-03-04_17-33-26.jpg')
    ];
  }

}
