import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 results;
 loading = false;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.gitRepos.subscribe(()=>this.loading = false)
  }

  search(repoName){
    console.log(repoName);
    this.loading = true;
    this.searchService.getRepos(repoName)
  }

}
