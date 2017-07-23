var path = require('path');
var fs = require('fs');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

var scraping = "/root/workspace/CentralSportScraping/public/javascripts/scraping.js";//jsファイルまでのパスを書く
var club_code ="112";
var date = "201707";

var options = [
	scraping,
	club_code,
	date
];						  
// ここでscraping.jsをphantomjsで呼び出して実行する
childProcess.execFile(binPath, options, function(error, stdout, stderr) {
	//stdoutの中にscraping.jsの実行結果(console.logの中身など)が入っている
	console.log(stdout);
    	//console.error(stderr);
    	if (error != null) {
    		console.error('error: ' + error);
    	}
});
