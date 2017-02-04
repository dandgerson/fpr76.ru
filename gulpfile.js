var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: "app"
		},
		notify: false
	});
});

gulp.task('watch',['browser-sync'], function(){
	gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], ['sass']);
	gulp.watch('app/**/*.html',browserSync.reload);
	gulp.watch('app/**/*.js',browserSync.reload);
});

gulp.task('default', ['watch']);