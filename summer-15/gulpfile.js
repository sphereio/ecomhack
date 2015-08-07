var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer');
	livereload = require('gulp-livereload');


gulp.task("styles", function(){
	sass('sass/style.scss', {style: 'expanded'})//{style: 'compressed'}
		.on('error', console.error.bind(console))
		.pipe(prefix('last 2 versions'))
		.pipe(gulp.dest('css/'))
		.pipe(livereload());
});

gulp.task('watch', function(){
	var server = livereload();
	gulp.watch('sass/style.scss', ['default']);
});

gulp.task('default', ['styles']);