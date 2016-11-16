import { NgModule, ModuleWithProviders, Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';
import {MdListModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';


/*
@Component({
  selector: 'bf-list',
  templateUrl: './bf-list.component.html',
  styleUrls: ['./bf-list.component.css']
})
*/

/*
@Component({
  moduleId: module.id,
  selector: 'bf-list',
  templateUrl: 'bf-list.component.html',
  styleUrls: ['bf-list.component.css']
})
*/

/*
@Component({
  selector: 'bf-list',
  template: `<div>
                  <button md-raised-button>hello</button>
                  <md-list class="bf-list" *ngIf="articles">
                     <ng-container *ngFor="let article of articles">
                          <md-list-item>
                           <img md-list-avatar src="{{article.imagebox}}" >
                           <h3 md-line> {{article.heading}} </h3>
                           <p md-line> {{article.description}}</p>
                        </md-list-item>
                          <md-divider></md-divider>
                    </ng-container>
                </md-list>
               </div>`,
  styleUrls: ['./bf-list.component.css']
})
*/



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

//declare const module: {id: string};

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
