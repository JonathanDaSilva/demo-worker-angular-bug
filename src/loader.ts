import {
    platform,
    provide,
} from "angular2/core";
import {
    WORKER_APP_PLATFORM,
    WORKER_APP_APPLICATION,
    WORKER_APP_ROUTER,
} from "angular2/platform/worker_app";
import {
    LocationStrategy,
    HashLocationStrategy,
} from 'angular2/router';
import {AppComponent} from "./app.component";

platform([WORKER_APP_PLATFORM])
    .asyncApplication(null, [
        WORKER_APP_APPLICATION,
        WORKER_APP_ROUTER,

        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]).then(function(ref) {
        ref.bootstrap(AppComponent)
    })
