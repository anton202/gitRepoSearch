import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  gitRepos
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.gitRepos.subscribe(repos => this.gitRepos = repos)
  }

}
