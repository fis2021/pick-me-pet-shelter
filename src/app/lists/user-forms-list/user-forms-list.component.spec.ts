import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormsListComponent } from './user-forms-list.component';

describe('UserFormsComponent', () => {
  let component: UserFormsListComponent;
  let fixture: ComponentFixture<UserFormsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});