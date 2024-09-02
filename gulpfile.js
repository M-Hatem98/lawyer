/*
*
* Author:    Mohammed Salah
* Website:   https://salahineo.github.io/salahineo/
* Email:     salahineo.personal@gmail.com
* Credit:    This Gulp file uses a set of plugins that facilitate the build process. All credits go to the respective plugins developers.
*
* */

/*
*
* Constants
* => Set of constant variables to be used in the build methods
*
* */


// Create Require as a Module
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Gulp
const gulp = require('gulp');

// Gulp Plugins
const fileinclude = require('gulp-file-include');
const gulpif = require('gulp-if');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const purgeSourcemaps = require('gulp-purge-sourcemaps');
const htmlmin = require('gulp-htmlmin');
import autoprefixer from 'gulp-autoprefixer';
const sass = require('gulp-sass')(require('sass'));

// External Tools
const browserify = require('browserify');
const babelify = require('babelify');
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const argv = require('yargs').argv;
const webpack = require("webpack");
const browserSync = require("browser-sync").create();

// Paths
const src = './src';
const dist = './dist';

// Webpack Config
const webpackConfig = argv.production ? "./webpack.prod.cjs" : "./webpack.dev.cjs";


/*
*
* Gulp Tasks
* => Set of tasks which used to clean, build, and server the app
*
* */


// Clean Build Files
gulp.task('clean', (done) => {
  const distFiles = [
    dist + '/**/*.*'
  ];

  gulp.src(distFiles, {read: false, allowEmpty: true})
    .pipe(clean());

  done();
});

// Build HTML
gulp.task('build-html', (done) => {
  const htmlFiles = [
    src + '/views/index.html',
    src + '/views/pages/**/*.html'
  ];

  gulp.src(htmlFiles, { base: src + '/views/' })
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true
    }))
    .pipe(gulpif(argv.production, htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest(dist));

  done();
});


// Build SCSS
gulp.task('build-css', (done) => {
  gulp.src(src + '/scss/base.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulpif(argv.production, sass({outputStyle: 'compressed'}).on('error', sass.logError), sass().on('error', sass.logError)))
    .pipe(autoprefixer())
    .pipe(rename('styles.min.css' ))
    .pipe(gulpif(argv.production, purgeSourcemaps(), sourcemaps.write('.')))
    .pipe(gulp.dest(dist + '/css'));

  done();
});


// Build JS (Gulp) => NOT IN USE
gulp.task('build-js', (done) => {
  browserify({
    entries: [src + "/js/app.js"]
  })
    .transform(babelify.configure({
      presets : ["@babel/preset-env"]
    }))
    .bundle()
    .pipe(source("bundle.min.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulpif(argv.production, terser({
      compress: {
        drop_console: true,
        ecma: 2015
      },
      format: {
        comments: false,
      }
    })))
    .pipe(gulpif(argv.production, purgeSourcemaps(), sourcemaps.write('.')))
    .pipe(gulp.dest(dist + '/js/'));

  done();
});


// Build JS (Webpack) => IN USE
gulp.task('webpack', (done) => {
  const promise = new Promise((resolve, reject) => {
    webpack(require(webpackConfig), (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats));
      }
      resolve();
    });
  });

  done();
});


// Serve App
gulp.task('serve', (done) => {
  browserSync.init({
    server: {
      baseDir: dist
    },
    browser: "brave"
  });

  done();
});

// Reload Server
gulp.task('server-reload', (done) => {
  browserSync.reload();

  done();
});

// Watch Changes
gulp.task('watch', (done) => {
  gulp.watch([src + '*.html', src + '/**/*.scss', src + '/**/*.js'], gulp.series(
    'clean',
    'build-html',
    'build-css',
    'webpack',
    'server-reload'
  ));

  done();
});


/*
*
* Commands List
* => Show a list of commands when the developer type "gulp" in the terminal, also it works with "gulp --tasks"
*
* */


// Set Of Commands For Default Option
gulp.task('default', function(done) {
  console.log('\n\nPlease run one of the following commands:');
  console.log('- npm run serve      => Start a live reload server');
  console.log('- npm run build:dev  => Build app in development mode');
  console.log('- npm run build:prod => Build app in production mode');
  done();
});

// Set Tasks For Export
const build = gulp.series(
  'clean',
  'build-html',
  'build-css',
  'webpack'
);
const serve = gulp.series(
  'clean',
  'build-html',
  'build-css',
  'webpack',
  'serve',
  'watch'
);

// Export Tasks
export {
  build,
  serve
}
