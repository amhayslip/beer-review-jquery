var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var hbsfy = require("hbsfy");

gulp.task('compile', function() {

  hbsfy.configure({
    extensions: ['hbs']
  });

  // Grabs the app.js file
  return browserify('./app/main.js')
    .transform(hbsfy)
    // bundles it and creates a file called main.js
    .bundle()
    .pipe(source('main.js'))
    // saves it the public/js/ directory
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    port: 4000
  })
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['compile']);
});

gulp.task('default', ['compile', 'watch', 'connect']);