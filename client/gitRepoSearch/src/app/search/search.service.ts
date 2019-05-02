import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    public loading = false;
    public gitRepos = new Subject();
    public error = new Subject<string>();
    private gitApiUrl = 'https://api.github.com/search/repositories?q=';

    constructor(private http: HttpClient) { }

    // fetching git repos from api.
    public getRepos(repoName):void {
        this.loading = true;
        this.http.get(this.gitApiUrl + repoName)
            .subscribe(repos => {
                this.loading = false
                this.gitRepos.next(repos)
                console.log(repos)
            },
                error => {this.handelEror(); this.loading = false});
    }

    private handelEror():void {
        this.error.next('Somthing went wrong, try again')
    }

}