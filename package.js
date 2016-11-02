Package.describe({
  name: 'estacks:leaflet-draw',
  version: '0.3.2',
  // Brief, one-line summary of the package.
  summary: 'Atmosphere wrapper for Leaflet-draw',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "leaflet-draw": "0.3.2"
})

Package.onUse(function(api) {
  api.use(['bevanhunt:leaflet@2.0.1'])
  api.versionsFrom('1.2');

  api.addFiles([
    '.npm/package/node_modules/leaflet-draw/dist/leaflet.draw-src.js',
    '.npm/package/node_modules/leaflet-draw/dist/leaflet.draw.css',

  ], 'client');

  api.addAssets([
    '.npm/package/node_modules/leaflet-draw/dist/images/spritesheet-2x.png',
    '.npm/package/node_modules/leaflet-draw/dist/images/spritesheet.png',
    '.npm/package/node_modules/leaflet-draw/dist/images/spritesheet.svg'
  ], 'client');
});
