// Import all directives
import {SampleDirective} from './directives/sample.directive';
import {SampleComponent} from './directives/sample.component';
import {HelloWorld} from './directives/hello-world.component';
import { BfList } from './directives/bf-list/bf-list.component';
import { BfCardComponent, BfCardTitle, BfCardSubtitle } from './directives/bf-card/bf-card.component';
import { BfBadgeComponent } from './directives/bf-badge/bf-badge.component';

// Export all directives
export * from './directives/sample.directive';
export * from './directives/sample.component';
export * from './directives/hello-world.component';
export * from './directives/bf-list/bf-list.component';
export * from './directives/bf-card/bf-card.component';
export * from './directives/bf-badge/bf-badge.component';


// Export convenience property
export const DIRECTIVES: any[] = [
  SampleDirective,
  SampleComponent,
  HelloWorld,
  BfList,
  BfCardComponent, BfCardTitle, BfCardSubtitle,
  BfBadgeComponent
];
