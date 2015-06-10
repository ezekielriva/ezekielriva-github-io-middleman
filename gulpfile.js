var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify');
;

var paths = {
  styles:  "./src/stylesheets/",
  scripts: "./src/javascripts/",
  vendor:  {
    scripts:      "./vendors/javascripts/",
    stylesheets:  "./vendors/stylesheets/"
  },
  dist:    {
    css: "./dist/css/",
    js:  "./dist/js/"
  }
}


var files = {
  stylesheets: paths.styles  + "**/*.scss",
  scripts:     paths.scripts + "**/*.js",
  vendors: {
    scripts: [ paths.vendor.scripts + "jquery.js",
               paths.vendor.scripts + "bootstrap.js" ]
  }
}

gulp.task('sass', function () {
  gulp.src(files.stylesheets)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.dist.css));
});

gulp.task('scripts:vendors', function () {
  return gulp.src(files.vendors.scripts)
             .pipe(concat('vendors.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest(paths.dist.js));
});

gulp.task('scripts', ["scripts:vendors"])

gulp.task('sass:watch', function () {
  gulp.watch(files.stylesheets, ['sass']);
});

gulp.task('scripts:watch', function (){
  gulp.watch(files.scripts, ['scripts']);
});

gulp.task('default', ['sass:watch', "scripts:watch", "scripts"])
