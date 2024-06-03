import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeDosenPage } from './make-dosen.page';

describe('MakeDosenPage', () => {
  let component: MakeDosenPage;
  let fixture: ComponentFixture<MakeDosenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
