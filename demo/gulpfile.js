var gulp = require('gulp'),
    path = require('path'),
    //componentLibrary = require('component-library')
    componentLibrary = require('../index.js');

gulp.task('compile', function() {
    componentLibrary({
        templatesDir: path.format({dir: __dirname, base: 'templates'}),
        outputDir: path.format({dir: __dirname, base: 'public'}),
        baseUrl: '/',
        js: [
            '/external.js'
        ],
        css: [
            '/external.css'
        ]
    });
});

gulp.task('watch', ['compile'], function() {
    gulp.watch(['templates/**/*', '../jade/**/*', '../sass/**/*', '../assets/**/*'], ['compile']);
});