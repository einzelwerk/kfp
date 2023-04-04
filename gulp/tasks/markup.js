const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const { path } = require('../config/path');
const { plugins } = require('../config/plugins');
const { isDev } = require('../config/mode'); // eslint-disable-line no-unused-vars

exports.markup = function markup() {
  return src(path.src.markup)
    .pipe(pug({ pretty: true }))
    .pipe(plugins.replace(/@\//g, './'))
    .pipe(dest(path.build.markup))
    .pipe(plugins.browsersync.stream());
};
