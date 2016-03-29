import {
  Component,
} from 'angular2/web_worker/worker';
import {
  RouteConfig,
  RouterLink,
  RouterOutlet,
} from 'angular2/router'

@Component({
  selector: 'home-view',
  template: '<h1>Home</h1>',
})
export class HomeComponent { }

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  directives: [
    RouterLink,
    RouterOutlet,
  ],
})
@RouteConfig([
  {path:'/home',  name: 'Home',  component: HomeComponent, useAsDefault: true},
])
export class AppComponent { }
