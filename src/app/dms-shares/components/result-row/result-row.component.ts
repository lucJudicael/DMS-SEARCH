import { Component, Input, OnInit } from '@angular/core';

export interface ResultRow {
  username: string;
  location: string;
  name: string;
  login: string;
  email: string;
  avatar_url: string;
  gravatar_id: string;
  public_repos: number;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-result-row',
  templateUrl: './result-row.component.html',
  styleUrls: ['./result-row.component.scss']
})
export class ResultRowComponent implements OnInit {
  @Input() singleRow!: ResultRow;

  constructor() { }

  ngOnInit(): void {
  }

}
