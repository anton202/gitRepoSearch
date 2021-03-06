import { Injectable } from "@angular/core";
import { GitRepo } from './book-marks.model'
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class BookMarksService {
    bookMarks: Array<GitRepo> = [];
    apiUrl = environment.apiUrl;
    emitBookMarks = new Subject();

    constructor(private http: HttpClient) { }

    public getBookMarks() {
        this.http.get<Array<GitRepo>>(this.apiUrl + '/bookMarks')
            .subscribe(bookMarks => {
                if (bookMarks) {
                   this.bookMarks.push(...bookMarks)
                }
            })
    }

    public saveRepo(repo: GitRepo): void {
        this.bookMarks.push(repo);
        this.post(repo)
    }

    public removeRepo(repoName: string, avatar: string): void {
        this.bookMarks.forEach((repo, idx) => {
            if (repo.repoName === repoName && repo.avatar === avatar) {
                this.bookMarks.splice(idx, 1)
            }
        })
        this.delete(repoName, avatar)
    }

    private post(repo): void {
        this.http.post(this.apiUrl + '/bookMarks/save', repo)
            .subscribe(null)
    }

    private delete(repoName, avatar): void {
        this.http.delete(this.apiUrl + '/bookMarks/delete/' + repoName + '/' + encodeURIComponent(avatar))
            .subscribe(null)
    }

    // returning a list of repo names and their avatar url, to avoid using nested loops in searchResultsService-checkIfBookMarked().
    public listOfRepoNames(): object {
        return this.bookMarks.reduce((acc, cValue) => {
            acc[cValue.repoName] = cValue.avatar
            return acc
        }, {})
    }
}