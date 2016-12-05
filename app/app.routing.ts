import { CounterComponent } from './pages/counter/counter.component'
import {ListComponent} from './pages/list/list.component'

export const routes = [
  { path: "", component: CounterComponent },
  { path: "list", component: ListComponent }
];

export const navigatableComponents = [
  CounterComponent, 
  ListComponent
];