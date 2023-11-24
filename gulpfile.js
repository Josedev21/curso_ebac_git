const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourceMaps = require('gulp-sourcemaps');
const oglify = require('gulp-uglify');

function ComprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(oglify())
        .pipe(gulp.dest('./build/scripts'))
}

function CompilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

/*função publica*/
function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("Executando via gulp");
        callback();

    },2000)
}
/*função publica*/
function DizOi(callback) {
    setTimeout(function() {
        console.log("Olá Gulp");
        DizTchau();
        callback();
    },1000)
}

/*função privada*/
function DizTchau() {
    console.log("tchau gulp");
}

/*parallel e series*/
exports.default = gulp.parallel(funcaoPadrao, DizOi);
exports.DizOi = DizOi;
exports.sass = CompilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false }, gulp.series(CompilaSass));
}
exports.javascript = ComprimeJavaScript;