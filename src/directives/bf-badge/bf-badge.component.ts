import { NgModule, ModuleWithProviders, Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'bf-badge',
  template: require('./bf-badge.component.html'),
  styles: [require('./bf-badge.component.scss')]
})
export class BfBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@NgModule({
  imports: [BrowserModule],
  exports: [
    BfBadgeComponent
  ],
  declarations: [
    BfBadgeComponent
  ],
})
export class BfBadgeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BfBadgeModule,
      providers: []
    };
  }
}