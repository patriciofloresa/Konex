import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradosComponent } from './asegurados.component';

describe('AseguradosComponent', () => {
  let component: AseguradosComponent;
  let fixture: ComponentFixture<AseguradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseguradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
