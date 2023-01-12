import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() page = 0;
  @Input() totalPages = 0;
  @Output() selectPage = new EventEmitter<number>();

  onSelectPage(newPage: number) {
    this.selectPage.emit(newPage);
  }

  onKeyDown(event: KeyboardEvent, newPage: number) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.onSelectPage(newPage);
    }
  }


  // used to loop through a fixed number
  range(max: number) {
    return new Array(max);
  }
}
