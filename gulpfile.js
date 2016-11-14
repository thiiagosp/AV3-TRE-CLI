var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('serve', function() {
  connect.server({
    root: '.',
    livereload: true,
    port: 3000,
    fallback: 'app/index.html'
  });
});

gulp.task('babel', function() {
    return gulp.src('/app/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('/dist/js'));
});

gulp.task('html', function () {
  gulp.src('/app/**/*.html')
    .pipe(gulp.dest('/dist/**/*.html'))
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('/app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['/app/**/*.html'], ['html']);
  // gulp.watch(['app/sass/*.scss'], ['sass']);
});

gulp.task('default', ['serve', 'watch']);
