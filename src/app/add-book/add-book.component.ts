import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Book } from '../book/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  // Mozna zmienic nazwe eventu dodajac opcjonalny parametr
  @Output('addBook') bookCreatedEvent: EventEmitter<{}> = new EventEmitter<{ title: string, status: number }>();

  newBook: string = '';
  status: number = 1;
  @ViewChild('newBook') inputValue: ElementRef;

  constructor() { }
  ngOnInit() { }

  // .emit() wysyla dane do nadrzednego elementu
  onAddNewBook() {
  // onAddNewBook(inputValue: HTMLInputElement) {
    this.bookCreatedEvent.emit({
      title: this.inputValue.nativeElement.value,
      status: this.status
    });
  }
}
