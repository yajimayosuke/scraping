var page = require('webpage').create();
																	 
// argsは、phantom.argsでアクセスできる。
var address = phantom.args[0];
var output  = phantom.args[1];

console.log(address);
console.log(output);

page.open( address, function(status){
		console.log(status);
		if(status !== 'success'){
				console.log('error');
		}
		else{
				page.render(output);
				phantom.exit();
		}
});
