import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLessMore } from './show-less-more';

describe('ShowLessMore', () => {
  let component: ShowLessMore;
  let fixture: ComponentFixture<ShowLessMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLessMore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLessMore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
