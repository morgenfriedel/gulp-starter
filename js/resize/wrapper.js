// Uses gulp to wrap compiled jQuery scripts in a window.resize() event function.

var through = require('through2'),
    gutil = require('gulp-util'),
    fs = require('fs');

module.exports = function(){
  var stream = through.obj(function(file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return cb();
    }
    if (file.isBuffer()) {
        var contents = file.contents.toString();
        file.contents = Buffer.concat([new Buffer('\n$(window).resize(function() {\n'), file.contents, new Buffer('\n});')]);
    }
    cb(null, file);
  }, function(){
  })
  return stream;
};