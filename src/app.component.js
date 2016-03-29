"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var worker_1 = require('angular2/web_worker/worker');
var router_1 = require('angular2/router');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        worker_1.Component({
            selector: 'home-view',
            template: '<h1>Home</h1>',
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        worker_1.Component({
            selector: 'my-app',
            template: '<router-outlet></router-outlet>',
            directives: [
                router_1.RouterLink,
                router_1.RouterOutlet,
            ],
        }),
        router_1.RouteConfig([
            { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
