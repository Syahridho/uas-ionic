import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListKrsPage } from './list-krs.page';

describe('ListKrsPage', () => {
  let component: ListKrsPage;
  let fixture: ComponentFixture<ListKrsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
