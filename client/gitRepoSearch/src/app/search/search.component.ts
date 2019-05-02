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

  // on user click on search button or Enter,
  // passing the repository name to the fetching function inside searchService.
  search(repoName){
    this.searchService.getRepos(repoName)
  }

}
