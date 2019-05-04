import { Injectable } from "@angular/core";
import { SearchService } from "../search/search.service";
import { BookMarksService } from "../book-marks/book-marks.service";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SearchResultsService {
    public gitReposContainer: Array<{}>;
    public gitRepos = new Subject<Array<{}>>();
   
    constructor(private searchService: SearchService, private bookMarksService: BookMarksService) {
        searchService.gitRepos.subscribe(repos => {
            this.gitReposContainer = repos
            this.checkIfBookMarked()
            this.gitRepos.next(this.gitReposContainer)
        })
    }

    // checks if the found repos names exist in bookMarks.
    // if a name exist the function assigns isBookMarked property to the repo object.
    private checkIfBookMarked(): void {
        const savedRepoNmaes = this.bookMarksService.listOfRepoNames();

        this.gitReposContainer.forEach((repo: { name, isBookMarked, owner }) => {
            if (savedRepoNmaes[repo.name] && savedRepoNmaes[repo.name] === repo.owner.avatar_url) {
                repo.isBookMarked = true
            }
        });
       
    }

    // this function is called when a user removes a bookMark from the bookMarks section.
    // the function itereates through gitReposContainer(which contains the current search results) and checks if the removed repository name 
    // exist in gitReposContaner. if the removed repo name matches one of the results the function assign a false value to isBookMarked property 
    // of that result object.
    public unBookMark(repoName, avatar){
        if(this.gitReposContainer){
        this.gitReposContainer.forEach((repo:{name, isBookMarked, owner},idx)=>{
            if(repo.name === repoName && repo.owner.avatar_url === avatar){
                repo.isBookMarked = false
            }
        })
    }
       this.gitRepos.next(this.gitReposContainer)
    }
}