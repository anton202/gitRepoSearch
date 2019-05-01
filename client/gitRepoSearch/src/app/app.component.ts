import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  displayBookMarks = false;

  openBookMarks(){
    if(!this.displayBookMarks){
      this.displayBookMarks = true;
    }else{
      this.displayBookMarks = false
    }
  }
}
