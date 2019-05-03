import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  displayBookMarks = false;

  // displays the bookMarks section if opend on tablet or a smartphone
  openBookMarks(){
    if(!this.displayBookMarks){
      this.displayBookMarks = true;
    }else{
      this.displayBookMarks = false
    }
  }
}
