var  gulp = require("gulp");
//var $ = require("gulp-load-plugins");
var less=require("gulp-less");
var clean=require("gulp-clean");
var concat=require("gulp-concat");
var connect=require("gulp-connect");
var cssmin=require("gulp-cssmin");
var uglify=require("gulp-uglify");
var open = require("open");
var imagemin=require("gulp-imagemin");

var app={
	srcPath:"src/",
	devPath:"build/",
	prePath:"dist/"
}
gulp.task("lib",function(){
	gulp.src("bower_components/**/*.js")
	.pipe(gulp.dest(app.devPath+"vendor"))
	.pipe(gulp.dest(app.prePath+"dist/vendor"))
	.pipe(connect.reload())
})
gulp.task("html",function(){
	gulp.src(app.srcPath+"**/*.html")
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prePath))
	.pipe(connect.reload())
})
gulp.task("json",function(){
	gulp.src(app.srcPath+"data/**/*.json")
	.pipe(gulp.dest(app.devPath+"data"))
	.pipe(gulp.dest(app.prePath+"data"))
	.pipe(connect.reload())
})
gulp.task("less",function(){
	gulp.src(app.srcPath+"style/*.less")
	.pipe(less())
	.pipe(gulp.dest(app.devPath+"css"))
	.pipe(cssmin())
	.pipe(gulp.dest(app.prePath+"css"))
	.pipe(connect.reload())
})
gulp.task("js",function(){
	gulp.src(app.srcPath+"script/**/*.js")
	.pipe(concat("index.js"))
	.pipe(gulp.dest(app.devPath +"js"))
	//.pipe(uglify())
	.pipe(gulp.dest(app.prePath+"js"))
	.pipe(connect.reload())
	
})
gulp.task("image",function(){
	gulp.src(app.srcPath+"image/**/*")
	.pipe(gulp.dest(app.devPath +"image"))
	.pipe(imagemin())
	.pipe(gulp.dest(app.prePath+"image"))
	.pipe(connect.reload())
	
})

gulp.task("build",["image","js","less","lib","html","json"]);

gulp.task("clean",function(){
	gulp.src([app.devPath,app.prePath])
	.pipe(clean());
	
})
gulp.task("serve",["build"],function(){
	connect.server({
		root:[app.devPath],
		livereload:true,
		port:1234	
	});
	open("http://localhost:1234");
	
	gulp.watch("bower_components/**/*",["lib"]);
	gulp.watch(app.srcPath+"/**/*.html",["html"]);
	gulp.watch(app.srcPath+"data/**/*.json",["json"]);
	gulp.watch(app.srcPath+"style/**/*.less",["less"]);
	gulp.watch(app.srcPath+"script/**/*.js",["js"]);
	gulp.watch(app.srcPath+"image/**/*",["image"]);
	
})
gulp.task("default",["serve"]);

