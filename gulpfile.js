var gulp = require('gulp');

gulp.task('copy-assets', function(){
	gulp.src(['src/**/*.css', 'src/**/*.scss', 'src/**/*.html' ])
  		.pipe(gulp.dest('nectar'))
});