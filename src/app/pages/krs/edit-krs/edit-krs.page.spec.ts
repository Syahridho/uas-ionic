import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditKrsPage } from './edit-krs.page';

describe('EditKrsPage', () => {
  let component: EditKrsPage;
  let fixture: ComponentFixture<EditKrsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
