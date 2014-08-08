Package.describe({
  summary: "Reactive Velocity test reports in your app.",
  version: "0.1.4",
  git: "https://github.com/rdickert/velocity-html-reporter.git"
})

Package.on_use(function(api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  api.use(["xolvio:velocity@0.1.18", 'templating','amplify', 'less'], "client");
  
  api.addFiles('lib/reamplify.js', 'client');

  api.addFiles('lib/client-report.html', 'client');
  api.addFiles('lib/client-report.js', 'client');
  api.addFiles('lib/client-report.less', 'client');
  api.addFiles('lib/status-widget.less', 'client');

  //bootstrap glyphicons
  api.addFiles('lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot', 'client');
  api.addFiles('lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf', 'client');
  api.addFiles('lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff', 'client');
  api.addFiles('lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg', 'client');

  api.addFiles('lib/spinner.gif');

  // api.export('reamplify', ['client']);
});
