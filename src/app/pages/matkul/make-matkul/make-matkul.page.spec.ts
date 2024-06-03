import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeMatkulPage } from './make-matkul.page';

describe('MakeMatkulPage', () => {
  let component: MakeMatkulPage;
  let fixture: ComponentFixture<MakeMatkulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMatkulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
