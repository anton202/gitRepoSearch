import { Injectable } from "@angular/core";
import { GitRepo } from './book-marks.model'
@Injectable({
    providedIn: 'root'
})
export class BookMarksService {
bookMarks: Array<GitRepo> = [];
}