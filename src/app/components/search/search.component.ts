import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() loading = false;
  @Input() query = '';
  @Output() searchQuery = new EventEmitter<string>();

  onSearch() {
    this.searchQuery.emit(this.query);
  }

  get isSearchDisabled() {
    return this.query.length === 0 || this.loading;
  }
}
