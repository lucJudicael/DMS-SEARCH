import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';
import { ResultRow } from 'src/app/dms-shares/components/result-row/result-row.component';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  searchExecuted = false;
  searchField = new FormControl('', [Validators.required]);
  searchResult$: BehaviorSubject<ResultRow[]> = new BehaviorSubject<
    ResultRow[]
  >([]);
  searching$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  error$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  totalResults = 0;
  itemPerPages = 5;
  page = 1;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}

  performSearch(page: number): void {
    this.searchExecuted = true;
    this.searchResult$.next([]);

    this._http
      .get<any>(`${environment.endpoint}/users`, {
        params: {
          q: `${this.searchField.value} in:email OR ${this.searchField.value} in:login`,
          per_page: this.itemPerPages,
          page,
        },
      })
      .pipe(
        finalize(() => this.searching$.next(false)),
        map((results: any) => {
          this.totalResults = results.total_count;
          return results.items.map((result: any) => this.adapt(result));
        })
      )
      .subscribe(
        (items: any[]) => {
          items.forEach((item) => {
            this.fetchUserDetails(item).subscribe((v) =>
              this.searchResult$.next([...this.searchResult$.value, v])
            );
          });
        },
        (error: any) => {
          alert(error);
        }
      );
  }

  fetchUserDetails(result: any): Observable<any> {
    return this._http.get<any>(result.url).pipe(map((res) => res));
  }

  onPaginationChanged(evt: any): void {
    this.itemPerPages = evt.pageSize;
    this.performSearch(evt.pageIndex);
  }

  adapt(result: any): ResultRow {
    return ['login', 'id', 'avatar_url', 'url'].reduce(
      (prev: any, next: string) => {
        prev[next] = result[next];
        return prev;
      },
      {}
    ) as ResultRow;
  }

}
