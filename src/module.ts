import {NgModule, ModuleWithProviders} from '@angular/core';

import { HelloWorldModule } from './index';
//import { BfBadgeModule } from './index';
//import { BfCardModule } from './index';
//import { BfListModule } from './index';

const NECTAR_MODULES = [
	HelloWorldModule
	//BfBadgeModule,
	//BfCardModule,
	//BfListModule
];


@NgModule({
	imports: [
	HelloWorldModule.forRoot()
	//BfBadgeModule.forRoot (),
	//BfCardModule.forRoot (),
	//BfListModule.forRoot ()
	],
	exports: NECTAR_MODULES
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