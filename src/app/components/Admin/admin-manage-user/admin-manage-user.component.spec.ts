import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageUserComponent } from './admin-manage-user.component';

describe('AdminManageUserComponent', () => {
  let component: AdminManageUserComponent;
  let fixture: ComponentFixture<AdminManageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminManageUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
