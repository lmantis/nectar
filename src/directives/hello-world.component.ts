import {NgModule, ModuleWithProviders,Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Article } from '../models/Article';
import {MdListModule} from '@angular/material';
//import {MaterialModule} from '@angular/material';

@Component({
    selector: 'hello-world',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
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
               </div>`
})
export class HelloWorld {

    message = "Click Me ...";
     articles = Articles;

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);
    }
}

const Articles: Article[] = [
    { imagebox: '/assets/police.jpg', heading: 'Two police officers in serious condition after being deliberately', description: 'Brafton Trial Feed Content  |  Last Modified: 2016-10-12 9:45PM' },
    { imagebox: '/assets/aircraft.jpg', heading: 'Cobham shares nose-dive as it issues second profit warning', description: 'Cobham |  Last Modified: 2016-10-24 10:45AM' },
    { imagebox: '/assets/telecoms.jpg', heading: 'Time Warner and AT&T say ‘no grounds’ to block $108bn merger', description: 'Braftn News  |  Last Modified: 2016-10-22 11:42AM' }

];


@NgModule({
 imports: [MdListModule, BrowserModule],
  exports: [
    HelloWorld
  ],
  declarations: [
    HelloWorld
  ],
})
export class HelloWorldModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HelloWorldModule,
      providers: []
    };
  }
}
