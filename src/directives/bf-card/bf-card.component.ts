import { NgModule, ModuleWithProviders, Component, OnInit, Input, Directive } from '@angular/core';

@Component({
  selector: 'bf-card',
  templateUrl: './bf-card.component.html',
  styleUrls: ['./bf-card.component.css']
})

export class BfCardComponent implements OnInit {

	@Input() title : string;
	@Input() action : string;
  constructor() { }

  ngOnInit() {
  }

}


@Directive({
  selector: 'bf-card-content'
})
export class BfCardTitle {}


@Directive({
  selector: 'bf-card-subtitle'
})
export class BfCardSubtitle {}


@NgModule({
  exports: [
    BfCardComponent,
    BfCardTitle,
    BfCardSubtitle
  ],
  declarations: [
    BfCardComponent,
    BfCardTitle,
    BfCardSubtitle
  ],
})
export class BfCardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BfCardModule,
      providers: []
    };
  }
}
