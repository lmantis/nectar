/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BfListComponent } from './bf-list.component';

describe('BfListComponent', () => {
  let component: BfListComponent;
  let fixture: ComponentFixture<BfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
