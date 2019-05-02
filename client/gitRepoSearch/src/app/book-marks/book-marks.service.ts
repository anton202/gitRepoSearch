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

    public removeRepo(repoName: string): void {
        this.bookMarks.forEach((repo, idx) => {
            if (repo.repoName === repoName) {
                this.bookMarks.splice(idx, 1)
            }
        })
    }

    public listOfRepoNames():object {
        return this.bookMarks.reduce((acc, cValue) => {
             acc[cValue.repoName] = cValue.avatr
             return acc
        }, {})
    }
}