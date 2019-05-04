import { Component, OnInit, Input } from '@angular/core';
import { BookMarksService } from '../book-marks/book-marks.service';
import { SearchResultsService } from '../search-results/search-results.service';

@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.css']
})
export class GitRepoComponent implements OnInit {
  @Input() public avatr: string;
  @Input() public repoName: string;
  @Input() public isSaved: boolean;
  

  constructor(private bookMarksService: BookMarksService, private searchResultsService: SearchResultsService) { }

  ngOnInit() {
    
  }

  public saveOrDeleteRepoFromBookmarks(repoName, avatr) {
    if (!this.isSaved) {
      this.isSaved = true;
      this.bookMarksService.saveRepo({ repoName, avatr })
    } else {
      this.isSaved = false;
      this.bookMarksService.removeRepo(repoName, avatr)
      this.searchResultsService.unBookMark(repoName, avatr)
    }
  }

}
