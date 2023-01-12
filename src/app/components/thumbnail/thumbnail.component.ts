import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() imgObj!:any;
  @Output() fullscreen = new EventEmitter<any>()

  onShowFullImage() {
    this.fullscreen.emit(this.imgObj);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.onShowFullImage();
    }
  }

  get imageSrc() {
    //return this.imgObj.images.preview_gif.url;
    return this.imgObj.images.fixed_width_small.url;
  }
}
