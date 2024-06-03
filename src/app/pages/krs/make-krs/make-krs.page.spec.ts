import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeKrsPage } from './make-krs.page';

describe('MakeKrsPage', () => {
  let component: MakeKrsPage;
  let fixture: ComponentFixture<MakeKrsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeKrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
