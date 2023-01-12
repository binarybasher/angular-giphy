import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GiphyService } from './services/giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query = '';
  loading = false;
  data = [];
  limit = 20;
  page = 0;
  total = 0;
  gotoTop = false;
  fullscreenActive = false;
  fullscreenUrl = '';
  fullscreenTitle = '';

  constructor(private giphyService: GiphyService) {
  }

  onSearch(searchQuery: string, gotoPage = 0) {
    // disable search
    this.loading = true;

    // store query
    this.query = searchQuery;

    // run search against giphy
    this.giphyService.search(this.query, gotoPage, this.limit).subscribe(res => {
      this.onResults(res, gotoPage);
    });
  }

  onResults(searchResults: any, newPage: number) {
    // enable search
    this.loading = false;

    // store results
    this.data = searchResults.data;

    // check if any results
    const anyResults = this.data.length > 0;
    if (!anyResults) {
      this.page = 0;
      this.total = 0;
      this.gotoTop = false;
      console.log('No results');
      return;
    }

    // calculate pages
    const pagination = searchResults.pagination;
    let pageCount = Math.ceil(pagination.total_count / this.limit);
    this.total = pageCount;

    // update current page
    this.page = newPage > pageCount ? pageCount : newPage;

    if (this.gotoTop) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    this.gotoTop = false;
  }

  onSelectPage(newPage: number) {
    this.gotoTop = true;
    this.onSearch(this.query, newPage);
  }

  onFullscreen(img: any) {
    this.fullscreenUrl = img.images.original.url;
    this.fullscreenTitle = img.title;
    this.fullscreenActive = true;
  }

  onCloseFullscreen() {
    this.fullscreenActive = false;
    this.fullscreenUrl = '';
    this.fullscreenTitle = '';
  }

  get showWarning() {
    return this.total===0 && this.query!=='' && !this.loading;
  }
}
