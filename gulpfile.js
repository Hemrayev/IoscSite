var gulp = require('gulp')
var server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('')	// <-- your app folder
      .pipe(server({
        livereload: true,
        open: true,
        host: "11.11.11.29",
        port: 8000	// set a port to avoid conflicts with other local apps
      }));
  })
  gulp.task('default', ['server']);
  // npm i gulp gulp-webserver --save-dev