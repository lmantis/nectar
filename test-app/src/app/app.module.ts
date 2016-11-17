import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test'

//import { NectarModule } from 'nectar-lib/nectar';
import { NectarModule } from  './../../../../nectar/nectar';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NectarModule.forRoot(),
    RouterModule.forRoot([
            { path: '', redirectTo: 'test', pathMatch: 'full' },
            { path: 'test', component: TestComponent },
            { path: '**', redirectTo: 'test' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
