import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: {
    title: string,
    status: number
  };

  constructor() { }

  ngOnInit() {
  }
  changeStatus() {
    this.book.status += 1;
    this.book.status = this.book.status >= 4 ? 1 : this.book.status;
  }
}
