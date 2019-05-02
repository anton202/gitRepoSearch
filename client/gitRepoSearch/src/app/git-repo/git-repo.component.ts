import { Component, OnInit, Input } from '@angular/core';
import { BookMarksService } from '../book-marks/book-marks.service';

@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.css']
})
export class GitRepoComponent implements OnInit {
  @Input() public avatr: string;
  @Input() public repoName: string;
  @Input() public isSaved: boolean;
  
  constructor(private bookMarksService: BookMarksService) { }

  ngOnInit() {
  }

  // private saveToBookmarks(repoName, avatr): void{
  //   console.log(avatr,repoName)
  //   this.bookMarksService.bookMarks.push({repoName: repoName,avatr: avatr})
  // }

  private saveOrDeleteRepoFromBookmarks(repoName,avatr){
    if(!this.isSaved){
      this.isSaved = true;
      this.bookMarksService.saveRepo({repoName,avatr})
    }else{
      this.isSaved = false;
      this.bookMarksService.removeRepo(repoName)
    }
  }

}
