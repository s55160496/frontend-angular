import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagePermissionComponent } from './admin-manage-permission.component';

describe('AdminManagePermissionComponent', () => {
  let component: AdminManagePermissionComponent;
  let fixture: ComponentFixture<AdminManagePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminManagePermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManagePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
