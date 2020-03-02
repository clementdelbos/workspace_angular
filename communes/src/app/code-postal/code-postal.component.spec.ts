import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePostalComponent } from './code-postal.component';

describe('CodePostalComponent', () => {
  let component: CodePostalComponent;
  let fixture: ComponentFixture<CodePostalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePostalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
