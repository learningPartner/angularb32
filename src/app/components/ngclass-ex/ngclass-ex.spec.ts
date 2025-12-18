import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassEx } from './ngclass-ex';

describe('NgclassEx', () => {
  let component: NgclassEx;
  let fixture: ComponentFixture<NgclassEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgclassEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclassEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
