var gulp = require('gulp');
var less = require('gulp-less');
var jsHint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function() {
  return gulp.src(jsFiles)
    .pipe(jsHint())
    .pipe(jsHint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe(jscs());
});

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('./public/less/creative.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('inject', function() {
  var wiredep = require('wiredep').stream;
  var inject = require('gulp-inject');

  var injectSrc = gulp.src([
    './public/css/*.css',
    './public/js/*.js'
  ]);

  var injectOptions = {
    ignorePath: '/public'
  };

  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/bower',
    ignorePath: '../../public'
  };

  return gulp.src([
    './src/views/*.ejs'
  ]).pipe(wiredep(options))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', [
  'style', 'less', 'inject'
], function() {
  var options = {
    script: 'app.js',
    delayTime: 1,
    env: {
      'PORT': 3000
    },
    watch: jsFiles
  };

  return nodemon(options)
    .on('restart', function(ev) {
      console.log('Restarting...');
    });
});
