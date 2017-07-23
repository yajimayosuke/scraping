var path = require('path');
var fs = require('fs');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

var scraping = "$HOME/workspace/CentralSportScraping/public/javascripts/test.js";//"scraping.js";//jsファイルまでのパスを書く

var gazo_name = "www.google.co.jp";
var gazo_file = gazo_name + ".png";
console.log("start");
//fs.exists(gazo_file, function (exists) {
//		if(exists){
//				console.log(gazo_file,"is exists!");
//		}else{

			var url = "http://" + gazo_name;

			var options = [
            	scraping,
				url,
				gazo_file,
			];						  
			console.log("in");
			// ここでrender.jsをphantomjsで呼び出して実行する
			childProcess.execFile(binPath, options, function(error, stdout, stderr) {
				console.log(stdout);
    			console.error(stderr);
    			if (error != null) {
    				console.error('error: ' + error);
    			}
			});
//		}
//});
console.log("end");
