import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/src/render3';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    gitRepos = new Subject();
    gitApiUrl = 'https://api.github.com/search/repositories?q=';

    constructor(private http: HttpClient) { }

    getRepos(repoName) {
        this.http.get(this.gitApiUrl + repoName)
            .subscribe(repos => {this.gitRepos.next(repos) ; console.log(repos)});
    }

}