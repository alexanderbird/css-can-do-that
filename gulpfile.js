const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer');
const wrap = require('gulp-wrap');
const markdown = require('gulp-meta-marked');
const extensionReplace = require('gulp-ext-replace');
const concat = require('gulp-concat');
const del = require('del');

const buildDirectory = 'html';
const articlesGlob = 'src/articles/*.md';
const cssGlob = 'src/css/*.css';
const indexTemplatePath = 'src/index.html';
const articleTemplatePath = 'src/article.html';
const htmlbeautify = require('gulp-html-beautify');

gulp.task('clean', () => del(buildDirectory));

gulp.task('build:html', () => gulp.src(articlesGlob)
  .pipe(markdown({
    headerIds: false,
    smartypants: true
  }))
  .pipe(extensionReplace('.json'))
  .pipe(wrap({ src: articleTemplatePath }))
  .pipe(concat('index.html'))
  .pipe(wrap({ src: indexTemplatePath }))
  .pipe(htmlbeautify({
    indent_size: 2
  }))
  .pipe(gulp.dest(buildDirectory))
);

gulp.task('build:css', () => gulp.src(cssGlob)
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest(buildDirectory))
);

gulp.task('build', gulp.parallel(
  'build:css',
  'build:html'
));

gulp.task('default', gulp.series('clean', 'build'));
