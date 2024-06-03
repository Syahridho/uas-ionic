import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMahasiswaPage } from './list-mahasiswa.page';

describe('ListMahasiswaPage', () => {
  let component: ListMahasiswaPage;
  let fixture: ComponentFixture<ListMahasiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
