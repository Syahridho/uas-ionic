import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeMahasiswaPage } from './make-mahasiswa.page';

describe('MakeMahasiswaPage', () => {
  let component: MakeMahasiswaPage;
  let fixture: ComponentFixture<MakeMahasiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
