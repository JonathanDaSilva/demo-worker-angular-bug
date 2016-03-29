"use strict";
var core_1 = require("angular2/core");
var worker_app_1 = require("angular2/platform/worker_app");
var router_1 = require('angular2/router');
var app_component_1 = require("./app.component");
core_1.platform([worker_app_1.WORKER_APP_PLATFORM])
    .asyncApplication(null, [
    worker_app_1.WORKER_APP_APPLICATION,
    worker_app_1.WORKER_APP_ROUTER,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]).then(function (ref) {
    ref.bootstrap(app_component_1.AppComponent);
});
