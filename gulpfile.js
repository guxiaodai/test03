//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');
 
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});
gulp.task('testconsole',function(){
	console.log('success,eimy');
});
gulp.task('textjs',function(){
	gulp.src('js/index.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
    gulp.src('js/*.js')
        .pipe(gulp.dest('build/js'));
		
});
gulp.task('testcss',function(){
    gulp.src('css/jquery.fullPage.css')
        .pipe(minifycss())
        .pipe(gulp.dest('build/css'));
        
});

gulp.task('imagesmin', function() {  
  return gulp.src('img/**')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(notify({ message: 'Images task complete' }))
    .pipe(gulp.dest('build/img'));
});

gulp.task('html',function(){
    gulp.src('index.html')
        .pipe(gulp.dest('build'));
});

// gulp.watch('js/index.js',function(event){
//     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// })
 
gulp.task('default',['testLess', 'testconsole','textjs','testcss','imagesmin','html']); //定义默认任务
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径