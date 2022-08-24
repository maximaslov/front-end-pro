const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');

function cleanDestTask() {
    return src('./dest', {read: false, allowEmpty: true }).pipe(clean());
}

function copyJs() {
    return src([
        './src/AlbumApi.js',
        './src/script.js',
    ], { sourcemaps: true })
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('./dest', { sourcemaps: true }));
}

function copyHtml() {
    return src('./src/index.html')
        .pipe(dest('./dest'));
}

function copyCss() {
    return src('./src/style.css')
        .pipe(dest('./dest'));
}

function watchFiles() {
    return watch('./src/**/*.js', { ignoreIntial: false }, () => copyJs());
}

exports.build = series(cleanDestTask, copyJs, copyHtml, copyCss)
exports.serve = series(cleanDestTask, copyJs, copyHtml, copyCss, watchFiles)