import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public searchService: SearchService) { }

  ngOnInit() {}

  // passing the repository name to the fetching function inside searchService.
 public search(repoName){
    this.searchService.getRepos(repoName)
  }

}
