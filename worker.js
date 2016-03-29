importScripts(
    "./node_modules/es6-shim/es6-shim.min.js",
    "./node_modules/systemjs/dist/system-polyfills.js",

    "./node_modules/angular2/bundles/angular2-polyfills.js",
    "./node_modules/systemjs/dist/system.src.js",
    "./node_modules/rxjs/bundles/Rx.js",
    "./node_modules/angular2/bundles/web_worker/worker.dev.js",
    "./node_modules/angular2/bundles/router.dev.js"
)
System.config({
  packages: {
    src: {
      defaultExtension: 'js'
    }
  }
});
System.import('src/loader')
  .catch(console.error.bind(console))
