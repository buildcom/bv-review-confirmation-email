var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    reload = bs.reload;

gulp.task('serve', function(){
  bs.init({
    server: './',
    port: 3030,
    index: 'all-bv-review-confirmation-email.html'
  });

  gulp.watch('./*.html').on('change', reload);
});

gulp.task('default', ['serve']);