import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMatkulPage } from './list-matkul.page';

describe('ListMatkulPage', () => {
  let component: ListMatkulPage;
  let fixture: ComponentFixture<ListMatkulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatkulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
