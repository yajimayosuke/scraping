var page = require('webpage').create();
var club_code = 112;
var day = 201707
var address = 'https://www.central.co.jp/club/schedule_detail.html?club_code='+ club_code +'&yyyymm='+ day;
//ヘッドレスブラウザを開く
page.open(address, function(status) {
	//できた処理
	if (status === 'success') {
		var body = page.evaluate(function() {
			var schedule = new String('');
			///*
			var count = 5;
			var times = 1;//document.getElementsByClassName('daytable').length;
			//日にち単位
			for(var i=0; i < times;i++){
				schedule += document.getElementsByClassName('daytable')[i].childNodes[0].getElementsByTagName('tr')[0].textContent + ':\n';//曜日を取得し、格納
				var place_code = document.getElementsByClassName('daytable')[i].childNodes[1].id.slice(0,4);//施設の変更をキャッチするために施設コード(divタグのidの頭の4文字)を保存
				schedule += '  施設(' + document.getElementsByClassName('facility')[count].textContent + '):\n';//施設名を取得し、格納
				//施設単位単位
				for (var j = 1; j < document.getElementsByClassName('daytable')[i].childNodes.length; j++) {
					//施設コードが異なっていた時、対象施設が変わったとみなし、コードを次の施設のコードに変更する
					if(place_code !==  document.getElementsByClassName('daytable')[i].childNodes[j].id.slice(0,4)){
						place_code = document.getElementsByClassName('daytable')[i].childNodes[j].id.slice(0,4);
						count++;
						schedule += '  \n  施設(' + document.getElementsByClassName('facility')[count].textContent + '):\n';
						break;//消す
					}
			   		//schedule +=  '  [' + j + ']' + document.getElementsByClassName('daytable')[i].childNodes[j].textContent + '\n';
			        //スケジュールの内容を取得し、改行ごとで分ける
					var part = document.getElementsByClassName('daytable')[i].childNodes[j].firstChild.innerText.split('\n');
					schedule += '\n';
					//スケジュールの項目単位
					for(var k=0;k<part.length;k++){
						schedule += '      [' + j + '-' + k + ']:' + part[k]+'\n';
					}
				}
			}
			return schedule;
		});
		//*/
		console.log(body);
	}
	console.log('AllEnd');
	phantom.exit();
});
