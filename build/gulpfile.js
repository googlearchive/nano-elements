var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyInline = require('gulp-minify-inline');
var size = require('gulp-size');

var minifyOptions = {
  //js: false
};

var modules = [
  //'nano-button.html',
  'nano-popup.html',
  'nano-spinner.html',
  'nano-carousel.html'
];

var tasks = modules.forEach(function(m) {
  gulp.task(m, function() {
    gulp.src('../src/' + m)
    .pipe(minifyInline(minifyOptions))
    .pipe(size())
    .pipe(gulp.dest('../'))
    ;
  });
});

gulp.task('default', modules);
