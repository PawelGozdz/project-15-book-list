import { Component } from '@angular/core';
import { Book } from './book/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainTitle = 'My Books';
  sectionTitle1: string = 'My Bookshelf';
  
  booksOnshelf = [
    { title: 'The Slight Edge', status: 1 },
    { title: 'Robotocalypse', status: 1 }
  ];

  onNewBookAdded(bookData: { title: string, status: number }) {
    this.booksOnshelf.push({
      title: bookData.title,
      status: bookData.status
    });
  }
}
