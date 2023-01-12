import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select page', () => {
    let page = 0;
    component.selectPage.subscribe(pg => page = pg);
    fixture.detectChanges();
    component.onSelectPage(3);

    expect(page).toEqual(3);
  });

  it('should return correct number range', () => {
    const value = component.range(5);
    expect(value.length).toEqual(5);
  });
});
