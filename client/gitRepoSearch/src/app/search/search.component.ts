import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 results;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(repoName){
    console.log(repoName);
    this.searchService.getRepos(repoName)
  }

}
