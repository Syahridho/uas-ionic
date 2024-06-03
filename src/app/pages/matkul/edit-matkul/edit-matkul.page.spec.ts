import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMatkulPage } from './edit-matkul.page';

describe('EditMatkulPage', () => {
  let component: EditMatkulPage;
  let fixture: ComponentFixture<EditMatkulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMatkulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
