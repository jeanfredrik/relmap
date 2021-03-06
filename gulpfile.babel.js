import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import del from 'del';
import runSequence from 'run-sequence';

var config = {
  paths: {
    js: {
      src: 'src/**/*.js',
      dist: 'dist/',
    },
    test: {
      src: 'test/**/*.js',
      dist: 'test-dist/',
      run: 'test-dist/**/*.js',
    },
  },
};

/* eslint no-console: 0 */

gulp.task('clean', () =>
  del(config.paths.js.dist)
);

gulp.task('babel', ['babel-src', 'babel-test']);

gulp.task('babel-src', () =>
  gulp.src(config.paths.js.src)
    .pipe(babel())
    .pipe(gulp.dest(config.paths.js.dist))
);

gulp.task('babel-test', () =>
  gulp.src(config.paths.test.src)
    .pipe(babel())
    .pipe(gulp.dest(config.paths.test.dist))
);

gulp.task('watch', () => {
  gulp.watch(config.paths.js.src, ['babel-src', 'test']);
  gulp.watch(config.paths.test.src, ['babel-test', 'test']);
});

gulp.task('test', ['babel'], () =>
  gulp.src([config.paths.test.run])
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', err => console.log(err.stack))
);

// Default Task
gulp.task('default', () =>
  runSequence('clean', ['babel', 'test'])
);
