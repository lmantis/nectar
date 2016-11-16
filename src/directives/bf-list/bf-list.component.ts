import { NgModule, ModuleWithProviders, Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';
import {MdListModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'bf-list',
  template: require('./bf-list.component.html'),
  styles: [require('./bf-list.component.css')]
})


export class BfList implements OnInit {
 @Input() articles : Article[];

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [MdListModule, BrowserModule],
  exports: [
    BfList
  ],
  declarations: [
    BfList
  ],
})
export class BfListModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BfListModule,
      providers: []
    };
  }
}
