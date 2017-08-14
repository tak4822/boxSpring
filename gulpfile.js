var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var jade        = require('gulp-jade');


gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});


gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('jade', function(){
  return gulp.src('_jadefiles/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('_site'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**', ['sass']);
    gulp.watch('_jadefiles/*.jade', ['jade']);
    gulp.watch('_jadefiles/parts/*.jade', ['jade']);
    gulp.watch(['index.html', '_site/*.html']);
});

gulp.task('default', ['browser-sync', 'watch','jade']);
