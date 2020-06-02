import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForoComponent } from './home-foro.component';

describe('HomeForoComponent', () => {
  let component: HomeForoComponent;
  let fixture: ComponentFixture<HomeForoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
