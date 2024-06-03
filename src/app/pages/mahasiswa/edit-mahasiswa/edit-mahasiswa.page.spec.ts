import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMahasiswaPage } from './edit-mahasiswa.page';

describe('EditMahasiswaPage', () => {
  let component: EditMahasiswaPage;
  let fixture: ComponentFixture<EditMahasiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
