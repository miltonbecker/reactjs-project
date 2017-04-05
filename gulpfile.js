var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

// Set the banner content
var banner = '/*!\n'
    + ' * Start Bootstrap - Clean Blog v3.3.7+1 (http://startbootstrap.com/template-overviews/clean-blog)\n'
    + ' * Copyright 2013-' + (new Date()).getFullYear() + ' Start Bootstrap\n'
    + ' * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n'
    + ' */\n';

// Compile LESS files from /less into /css
gulp.task('less', function () {
    return gulp.src('client/less/clean-blog.less')
        .pipe(less())
        .pipe(header(banner))
        .pipe(gulp.dest('client/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', [ 'less' ], function () {
    return gulp.src('client/public/css/clean-blog.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('client/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function () {
    return gulp.src('client/public/js/clean-blog.js')
        .pipe(uglify())
        .pipe(header(banner))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('client/public/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function () {
    //gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
    gulp.src([ 'node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*' ])
        .pipe(gulp.dest('client/public/vendor/bootstrap'))

    gulp.src([ 'node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js' ])
        .pipe(gulp.dest('client/public/vendor/jquery'))

    gulp.src([
        'node_modules/font-awesome/**',
        //'!node_modules/font-awesome/**/*.map',
        '!node_modules/font-awesome/.npmignore',
        '!node_modules/font-awesome/*.txt',
        '!node_modules/font-awesome/*.md',
        '!node_modules/font-awesome/*.json'
    ])
        .pipe(gulp.dest('client/public/vendor/font-awesome'))
})

// Run everything
gulp.task('default', [ 'less', 'minify-css', 'minify-js', 'copy' ]);

// Configure the browserSync task
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', [ 'less', 'minify-css', 'minify-js', 'build-dev' ], function () {
    gulp.watch('client/less/*.less', [ 'less' ]);
    gulp.watch('client/public/css/*.css', [ 'minify-css' ]);
    gulp.watch('client/public/js/*.js', [ 'minify-js' ]);

    // Reloads the browser whenever HTML or JS files change
    //gulp.watch('client/*.html', browserSync.reload);
    //gulp.watch('client/js/**/*.js', browserSync.reload);
});

/*
 * Webpack
 */

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task('build-dev', [ 'webpack:build-dev' ], function () {
    gulp.watch([ 'client/*.js', 'client/components/*.js' ], [ 'webpack:build-dev' ]);
});

// modify some webpack config options
// var myDevConfig = Object.create(webpackConfig);
// myDevConfig.devtool = 'sourcemap';
// myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(webpackConfig);

gulp.task('webpack:build-dev', function () {
    // run webpack
    devCompiler.run(function (err, stats) {
        if (err)
            throw new gutil.PluginError('webpack:build-dev', err);
        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }));
    });
});

// Production build
gulp.task('build', [ 'webpack:build' ]);

gulp.task('webpack:build', function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(myConfig, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));
        callback();
    });
});
