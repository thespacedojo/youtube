/*
 * youtube wrapper by Josh Owens
 * based on the original youtube-feeds
 *
 * Made with love for the meteor community!
 *
*/
Package.describe({
    summary: "Youtube API for Meteor"
});

Npm.depends({"youtube-feeds" : "2.2.1"});

Package.on_use(function(api) {
  api.add_files(['youtube.js'], 'server');
  if (typeof api.export !== 'undefined') {
    api.export(['Youtube'], 'server');
  }
});
