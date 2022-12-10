const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//const plumber = require('gulp-plumber');

function css(done) {
    // Identificar el archivo css a compilar
    src('src/scss/**/*.scss')
        //.pipe(plumber())
        // Compilar el archivo
        .pipe(sass())


    // Almacenar el archivo compilado
    .pipe(dest('build/css'))
    done();
}
// Tarea watch
function dev(done) {

    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;