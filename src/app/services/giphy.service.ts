import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private httpClient: HttpClient) { }

  search(query: string, page=0, limit=10): Observable<any> {
    // todo create response class matching api response model
    let escapedQuery = encodeURIComponent(query);
    let offset = page * limit;
    return this.httpClient.get(environment.giphy_base_url + `&limit=${limit}&offset=${offset}&q=${escapedQuery}`);
  }
}
