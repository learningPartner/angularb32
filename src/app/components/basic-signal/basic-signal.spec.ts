import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSignal } from './basic-signal';

describe('BasicSignal', () => {
  let component: BasicSignal;
  let fixture: ComponentFixture<BasicSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
