var fs = require('fs');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var express = require('express');

var FILES = [
  'index.html',
  'css/**/*.css',
  'assets/**/*',
];

gulp.task('default', function() {
  var app = express();
  app.use(express.static('.'));
  app.listen(3000);

  function reload() {
    gulp.src(FILES)
      .pipe(livereload({ start: true }));
  }

  gulp.watch(FILES, reload);
  reload();
});
