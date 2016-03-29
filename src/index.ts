import {
    WORKER_RENDER_PLATFORM,
    WORKER_RENDER_APPLICATION,
    WORKER_RENDER_ROUTER,
    WORKER_SCRIPT,
} from "angular2/platform/worker_render";
import {
    platform,
    Provider,
} from "angular2/core";

platform([WORKER_RENDER_PLATFORM])
    .application([
        WORKER_RENDER_APPLICATION,
        new Provider(WORKER_SCRIPT, {useValue: "worker.js"}),
        WORKER_RENDER_ROUTER,
    ]);

