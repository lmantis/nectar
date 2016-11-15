/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BfCardComponent } from './bf-card.component';

describe('BfCardComponent', () => {
  let component: BfCardComponent;
  let fixture: ComponentFixture<BfCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
