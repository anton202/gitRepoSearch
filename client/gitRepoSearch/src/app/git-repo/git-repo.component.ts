import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.css']
})
export class GitRepoComponent implements OnInit {
  @Input() avatr;
  @Input() repoName
  constructor() { }

  ngOnInit() {
  }

}
