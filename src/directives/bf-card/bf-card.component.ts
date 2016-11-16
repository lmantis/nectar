import { NgModule, ModuleWithProviders, Component, OnInit, Input, Directive } from '@angular/core';
//import { MdCardModule, MdButtonModule, MdIconModule, MdCoreModule} from '@angular/material';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'bf-card',
  template: require('./bf-card.component.html'),
  styles: [require('./bf-card.component.css')]
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
   imports: [MaterialModule, BrowserModule],
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
      providers: [MdIconRegistry]
    };
  }
}
