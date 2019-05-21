/* eslint-disable no-return-await */
let gulp = require('gulp');
let packager = require('./package.json');
let replace = require('gulp-replace');
let babel = require('gulp-babel');
let del = require('del');

gulp.task('clear', async(cb) => {
    return await del([
        'libs/**/*'
    ]);
});
/**
 * babel src --out-dir lib
 */
gulp.task('compile', gulp.series('clear', function() {
    return gulp.src('./src/**/*.js')
        .pipe(replace('process.env._VERSION_', `'${packager.version}'`))
        .pipe(babel())
        .pipe(gulp.dest('./libs'));
}));
