const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer');
const wrap = require('gulp-wrap');
const concat = require('gulp-concat');
const del = require('del');
const dom = require('gulp-dom');

const buildDirectory = '.html';
const articlesGlob = ['src/articles/*.html', '!src/articles/home.html', 'src/articles/home.html'];
const cssGlob = 'src/css/*.css';
const indexTemplatePath = 'src/index.html';
const htmlbeautify = require('gulp-html-beautify');

gulp.task('clean', () => del(buildDirectory));

gulp.task('build:html', () => gulp.src(articlesGlob)
  .pipe(concat('index.html'))
  .pipe(wrap({ src: indexTemplatePath }))
  .pipe(dom(function() {
    const pre = Array.from(this.querySelectorAll('pre'))
    const code = Array.from(this.querySelectorAll('code'))
    pre.concat(code).forEach(element => {
      const text = element.innerHTML;
      const escapedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      const leadingWhiteSpace = escapedText.match(/^ */)[0].length
      const lines = []
      const leadingWhiteSpaceRegEx = new RegExp(`^${Array(leadingWhiteSpace).join(' ')}`)
      escapedText.split('\n').forEach(line => {
        lines.push(line.replace(leadingWhiteSpaceRegEx, ''))
      });
      element.innerHTML = lines.join('\n'); 
    });
  }))
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
  .pipe(concat('index.css'))
  .pipe(gulp.dest(buildDirectory))
);

gulp.task('build', gulp.parallel(
  'build:css',
  'build:html'
));

gulp.task('default', gulp.series('clean', 'build'));
