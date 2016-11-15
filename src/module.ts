import {NgModule, ModuleWithProviders} from '@angular/core';

import {HelloWorldModule} from './index';

const NECTAR_MODULES = [
	HelloWorldModule];


@NgModule({
	imports: [
	HelloWorldModule.forRoot()],
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