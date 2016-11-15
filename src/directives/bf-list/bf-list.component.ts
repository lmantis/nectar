import { NgModule, ModuleWithProviders, Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'bf-list',
  templateUrl: './bf-list.component.html',
  styleUrls: ['./bf-list.component.css']
})
export class BfListComponent implements OnInit {
  @Input() articles : Article[];
  
  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  exports: [
    BfListComponent,
  ],
  declarations: [
    BfListComponent
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
