import { Component, OnInit} from '@angular/core';
import { SearchResultsService } from './search-results.service';
import { SearchService } from '../search/search.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{
  public gitRepos: Array<{}> ;
  public error: string;
 

  constructor(
    private searchResultsService: SearchResultsService,
    public searchService: SearchService
  ) { }

  ngOnInit() {
   this.searchResultsService.gitRepos.subscribe(repos => {
      this.gitRepos = repos
      // resets the error property if an error already occured.
      this.error = '';
    })
    this.searchService.error.subscribe(errorMessage => this.error = errorMessage)
  }

  
  
}
