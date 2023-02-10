import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService) {}
  pages = [];
  receiveTerm(term: string) {
    this.wikipedia.searchTerm(term).subscribe((response) => {
      this.pages = response;
    });
  }
}
