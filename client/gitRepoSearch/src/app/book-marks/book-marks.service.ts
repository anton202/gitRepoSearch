import { Injectable } from "@angular/core";
import { GitRepo } from './book-marks.model'

@Injectable({
    providedIn: 'root'
})
export class BookMarksService {
    bookMarks: Array<GitRepo> = [];

    constructor() { }

    public saveRepo(repo: GitRepo): void {
        this.bookMarks.push(repo);
    }

    public removeRepo(repoName: string, avatar: string): void {
        this.bookMarks.forEach((repo, idx) => {
            if (repo.repoName === repoName && repo.avatr === avatar) {
                this.bookMarks.splice(idx, 1)
            }
        })
    }

    // returning a list of repo names and their avatar url, to avoid using nested loops in searchResultsService-checkIfBookMarked().
    public listOfRepoNames():object {
        return this.bookMarks.reduce((acc, cValue) => {
             acc[cValue.repoName] = cValue.avatr
             return acc
        }, {})
    }
}