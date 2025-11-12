const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

// Paths
const paths = {
    scss: './src/scss/**/*.scss',
    css: './src/css',
    js: './src/js/**/*.js',
    jsDest: './src/js',
    images: './assets/**/*',
};

// Compile SCSS to CSS
function styles() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.css));
}

// Minify JavaScript
function scripts() {
    return gulp.src(paths.js)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.jsDest));
}

// Optimize images
function images() {
    return gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest('./assets'));
}

// Watch files for changes
function watch() {
    gulp.watch(paths.scss, styles);
    gulp.watch(paths.js, scripts);
    gulp.watch(paths.images, images);
}

// Define complex tasks
const build = gulp.series(gulp.parallel(styles, scripts, images));
const dev = gulp.series(build, watch);

// Export tasks
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.default = dev;