import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSettingsGearComponent } from './header-settings-gear.component';

describe('HeaderSettingsGearComponent', () => {
  let component: HeaderSettingsGearComponent;
  let fixture: ComponentFixture<HeaderSettingsGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSettingsGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSettingsGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
