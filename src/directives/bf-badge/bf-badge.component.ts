import { NgModule, ModuleWithProviders, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-badge',
  templateUrl: './bf-badge.component.html',
  styleUrls: ['./bf-badge.component.scss']
})
export class BfBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@NgModule({
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