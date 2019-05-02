import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';
import { BookMarksService } from '../book-marks/book-marks.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public gitRepos: Array<{}>;
  public error: string;

  constructor(private searchService: SearchService, private bookMarksService: BookMarksService) { }

  ngOnInit() {
    this.searchService.gitRepos.subscribe(repos => {
      this.gitRepos = repos
      this.checkIfBookMarked();
    })
    this.searchService.error.subscribe(errorMessage => this.error = errorMessage)
  }

  private checkIfBookMarked() {
    const savedRepoNmaes = this.bookMarksService.listOfRepoNames();

    this.gitRepos.forEach((repo: { name, isBookMarked, owner }) => {
      if (savedRepoNmaes[repo.name] && savedRepoNmaes[repo.name] === repo.owner.avatar_url) {
        repo.isBookMarked = true

      }
    });
    console.log(savedRepoNmaes)
  }
}
