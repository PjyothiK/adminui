import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteroleComponent } from './deleterole.component';

describe('DeleteroleComponent', () => {
  let component: DeleteroleComponent;
  let fixture: ComponentFixture<DeleteroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
