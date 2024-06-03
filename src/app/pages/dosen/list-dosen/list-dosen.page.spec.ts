import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDosenPage } from './list-dosen.page';

describe('ListDosenPage', () => {
  let component: ListDosenPage;
  let fixture: ComponentFixture<ListDosenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
