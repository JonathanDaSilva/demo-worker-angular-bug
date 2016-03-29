"use strict";
var worker_render_1 = require("angular2/platform/worker_render");
var core_1 = require("angular2/core");
core_1.platform([worker_render_1.WORKER_RENDER_PLATFORM])
    .application([
    worker_render_1.WORKER_RENDER_APPLICATION,
    new core_1.Provider(worker_render_1.WORKER_SCRIPT, { useValue: "worker.js" }),
    worker_render_1.WORKER_RENDER_ROUTER,
]);
