import {NgModule, ModuleWithProviders} from '@angular/core';

//import { HelloWorldModule } from './index';
//import { BrowserModule } from '@angular/platform-browser';
//import {MaterialModule} from '@angular/material';
import { BfBadgeModule } from './index';
import { BfCardModule } from './index';
import { BfListModule } from './index';

//import components
//import { HelloWorld } from './index';

/* import BrowserModule and MaterialModule to NECTAR_MODULES if components are imported
const NECTAR_COMPONENTS = [
	HelloWorld
];
*/

const NECTAR_MODULES = [
	BfBadgeModule,
	BfCardModule,
	BfListModule
];

@NgModule({
	//declarations: NECTAR_COMPONENTS,
	imports: [
	//BrowserModule,
	//MaterialModule.forRoot(),
	//HelloWorldModule.forRoot(),
	BfBadgeModule.forRoot(),
	BfCardModule.forRoot(),
	BfListModule.forRoot()
	],
	exports: NECTAR_MODULES//, NECTAR_COMPONENTS]
})
export class NectarRootModule {}

@NgModule({
  imports: NECTAR_MODULES,
  exports: NECTAR_MODULES,
})
export class NectarModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NectarRootModule};
  }
}