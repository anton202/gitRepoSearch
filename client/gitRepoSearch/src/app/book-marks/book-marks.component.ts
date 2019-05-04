import { Component, OnInit } from '@angular/core';
import { BookMarksService } from './book-marks.service';

@Component({
  selector: 'app-book-marks',
  templateUrl: './book-marks.component.html',
  styleUrls: ['./book-marks.component.css']
})
export class BookMarksComponent implements OnInit {
  bookMarks: Array<object>;

  constructor(private bookMarksService: BookMarksService) { 
    this.bookMarks = this.bookMarksService.bookMarks;
  }

  ngOnInit() {
    this.bookMarksService.getBookMarks()
  }

}
