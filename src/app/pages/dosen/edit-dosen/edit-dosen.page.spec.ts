import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDosenPage } from './edit-dosen.page';

describe('EditDosenPage', () => {
  let component: EditDosenPage;
  let fixture: ComponentFixture<EditDosenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
