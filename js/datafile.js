emphasisAddress();

function emphasisAddress() {
	$.ajax({
		type: "post",
		url: 'http://192.168.234.133:9200/skyeye-las_event-2017.03.09/skyeye-las_event/_search',
		async: true,
		data: JSON.stringify({
			"aggs": {
				"siteData": {
					"terms": {
						"field": "uri"
					}
				}
			}
		}),
		dataType: "json",
		success: function(data) {
			console.log(data)
		}
	});
}

function nowHour(now) {
	var hour = now.getHours();
	var minute = now.getMinutes();
	return hour + ":" + minute ;
}

var d = new Date(1230999938);
alert(nowHour(d));