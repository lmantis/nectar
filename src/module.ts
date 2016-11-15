import {NgModule, ModuleWithProviders} from '@angular/core';

import {HelloWorld} from './index';

const NECTAR_MODULES = [
	HelloWorld];


@NgModule({
	imports: [
	HelloWorld.forRoot()],
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