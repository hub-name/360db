$(function() {
	//var newDate = getNowFormatDate().substring(0,10);
	//var YesterDate = getYesterdayDate().substring(0,10);
	var newDate = "2017.03.10";
	var YesterDate = "2017.03.09";
	console.log(newDate, YesterDate);
	dataLoad();
	init();
	
	//	dateupdata();
	//	setInterval(function() {
	//		dataLoad()
	//		dateupdata()
	//
	//	}, 1000);
	function dataLoad() {
		$.ajax({
			type: "post",
			url: 'http://192.168.234.133:9200/skyeye-las_event-' + newDate + ',skyeye-las_event-' + YesterDate + '/skyeye-las_event/_search?pretty&ignore_unavailable=true',
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
			success: function(result) {
				webList(result.aggregations.siteData.buckets)
			}
		});
		$.ajax({
			type: "post",
			url: 'http://192.168.234.133:9200/skyeye-las_event-2017.03.09/_search',
			async: true,
			data: JSON.stringify(),
			dataType: "json",
			success: function(result) {
				//console.log(result.hits.hits);
				attackList(result.hits.hits);
			}
		});
		$.ajax({
			type: "post",
			url: 'http://192.168.234.133:9200/skyeye-las_event-2017.03.09/_search',
			async: true,
			data: JSON.stringify({
				"query": {
					"match": {
						"nhop": "www.kexuejia.net.cn"
					}
				},
				"aggs": {
					"chartData": {
						"date_histogram": {
							"field": "recept_time",
							"interval": "1h",
							"time_zone": "Asia/Shanghai",
							"min_doc_count": 0
						}
					},
					"chartLeftData": {
						"date_histogram": {
							"field": "recept_time",
							"interval": "6h",
							"time_zone": "Asia/Shanghai",
							"min_doc_count": 0
						}
					}
				}
			}),
			dataType: "json",
			success: function(result) {
				console.log(result);
				var chartData = result.aggregations.chartData.buckets;
				var chartLeftData = result.aggregations.chartLeftData.buckets;
				console.log(chartLeftData);
				var xAxis = [];
				var yAxis = [];
				for(var i = 0; i < chartData.length; i++) {
					//console.log(chartData[i]);
					yAxis.push(chartData[i].doc_count);
					var str = chartData[i].key_as_string;
					xAxis.push(str.substring(11, 16));
				}
				//console.log(xAxis,yAxis);
				charSetup('chart1', lineChart, xAxis, yAxis);
				var lastcount = chartLeftData.length - 1;
				var region = parseInt((chartData[lastcount].doc_count - chartData[lastcount - 1].doc_count) / chartData[lastcount].doc_count * 100);
				//console.log(lastcount,region);
				$("#chart1").parent().siblings(".lb-head").find(".lbh-msg-url").html("fg.bjcz.gov.cn");
				$("#chart1").siblings(".lbc-data").find(".anum").html(chartData[chartData.length-1].doc_count);
				$("#chart1").siblings(".lbc-data").find(".abfb").html(region + "%");
			}
		});
		$.ajax({
			type: "post",
			url: 'http://192.168.234.133:9200/skyeye-las_event-2017.03.09/_search',
			async: true,
			data: JSON.stringify({
				"query": {
					"match": {
						"nhop": "www.bjcz.gov.cn"
					}
				},
				"aggs": {
					"chartData": {
						"date_histogram": {
							"field": "recept_time",
							"interval": "1h",
							"time_zone": "Asia/Shanghai",
							"min_doc_count": 0
						}
					},
					"chartLeftData": {
						"date_histogram": {
							"field": "recept_time",
							"interval": "6h",
							"time_zone": "Asia/Shanghai",
							"min_doc_count": 0
						}
					}
				}
			}),
			dataType: "json",
			success: function(result) {
				console.log(result);
				var chartData = result.aggregations.chartData.buckets;
				var chartLeftData = result.aggregations.chartLeftData.buckets;
				console.log(chartLeftData);
				var xAxis = [];
				var yAxis = [];
				for(var i = 0; i < chartData.length; i++) {
					//console.log(chartData[i]);
					yAxis.push(chartData[i].doc_count);
					var str = chartData[i].key_as_string;
					xAxis.push(str.substring(11, 16));
				}
				//console.log(xAxis,yAxis);
				charSetup('chart2', lineChart, xAxis, yAxis);
				var lastcount = chartLeftData.length - 1;
				var region = parseInt((chartData[lastcount].doc_count - chartData[lastcount - 1].doc_count) / chartData[lastcount].doc_count * 100);
				//console.log(lastcount,region);
				$("#chart2").parent().siblings(".lb-head").find(".lbh-msg-url").html("fg.bjcz.gov.cn");
				$("#chart2").siblings(".lbc-data").find(".anum").html(chartData[chartData.length-1].doc_count);
				$("#chart2").siblings(".lbc-data").find(".abfb").html(region + "%");
			}
		});
		$.ajax({
			type: "post",
			url: 'http://192.168.234.133:9200/skyeye-las_event-2017.03.09/_search',
			async: true,
			data: JSON.stringify({
				"query": {
					"match": {
						"nhop": "fg.bjcz.gov.cn"
					}
				},
				"aggs": {
					"chartData": {
						"date_histogram": {
							"field": "recept_time",
							"interval": "1h",
							"time_zone": "Asia/Shanghai",
							"min_doc_count": 0
						}
					},
					"chartLeftData": {
						"date_histogram": {
							"field": "recept_time",
							"interval": "6h",
							"time_zone": "Asia/Shanghai",
							"min_doc_count": 0
						}
					}
				}
			}),
			dataType: "json",
			success: function(result) {
				console.log(result);
				var chartData = result.aggregations.chartData.buckets;
				var chartLeftData = result.aggregations.chartLeftData.buckets;
				console.log(chartLeftData);
				var xAxis = [];
				var yAxis = [];
				for(var i = 0; i < chartData.length; i++) {
					//console.log(chartData[i]);
					yAxis.push(chartData[i].doc_count);
					var str = chartData[i].key_as_string;
					xAxis.push(str.substring(11, 16));
				}
				//console.log(xAxis,yAxis);
				charSetup('chart3', lineChart, xAxis, yAxis);
				var lastcount = chartLeftData.length - 1;
				var region = parseInt((chartData[lastcount].doc_count - chartData[lastcount - 1].doc_count) / chartData[lastcount].doc_count * 100);
				//console.log(lastcount,region);
				$("#chart3").parent().siblings(".lb-head").find(".lbh-msg-url").html("fg.bjcz.gov.cn");
				$("#chart3").siblings(".lbc-data").find(".anum").html(chartData[chartData.length-1].doc_count);
				$("#chart3").siblings(".lbc-data").find(".abfb").html(region + "%");
			}
		});
		$.ajax({
			type: "post",
			url: 'http://192.168.234.133:9200/skyeye-las_event-2017.03.09/_search',
			async: true,
			data: JSON.stringify({
				"query": {
					"match": {
						"nhop": "fg.bjcz.gov.cn"
					}
				},
				"aggs": {
					"chartData": {
						"date_histogram": {
							"field": "recept_time",
							"interval": "1h",
							"time_zone": "Asia/Shanghai",
							"min_doc_count": 0
						}
					},
					"chartLeftData": {
						"date_histogram": {
							"field": "recept_time",
							"interval": "6h",
							"time_zone": "Asia/Shanghai",
							"min_doc_count": 0
						}
					}
				}
			}),
			dataType: "json",
			success: function(result) {
				console.log(result);
				var chartData = result.aggregations.chartData.buckets;
				var chartLeftData = result.aggregations.chartLeftData.buckets;
				console.log(chartLeftData);
				var xAxis = [];
				var yAxis = [];
				for(var i = 0; i < chartData.length; i++) {
					//console.log(chartData[i]);
					yAxis.push(chartData[i].doc_count);
					var str = chartData[i].key_as_string;
					xAxis.push(str.substring(11, 16));
				}
				//console.log(xAxis,yAxis);
				charSetup('chart4', lineChart, xAxis, yAxis);
				var lastcount = chartLeftData.length - 1;
				var region = parseInt((chartData[lastcount].doc_count - chartData[lastcount - 1].doc_count) / chartData[lastcount].doc_count * 100);
				//console.log(lastcount,region);
				$("#chart4").parent().siblings(".lb-head").find(".lbh-msg-url").html("fg.bjcz.gov.cn");
				$("#chart4").siblings(".lbc-data").find(".anum").html(chartData[chartData.length-1].doc_count);
				$("#chart4").siblings(".lbc-data").find(".abfb").html(region + "%");
			}
		});
		$.ajax({
			type: "post",
			url: 'http://192.168.234.133:9200/skyeye-las_event-2017.03.09/_search',
			async: true,
			data: JSON.stringify({
				"aggs": {
					"siteData": {
						"terms": {
							"field": "pri"
						}
					}
				}
			}),
			dataType: "json",
			success: function(result) {
				//console.log(result.aggregations.siteData.buckets);
				gcalrn(result.aggregations.siteData.buckets)
			}
		});
		dateupdata();
	}

	function dateupdata() {
		$(".hd-data span").html(getYesterdayDate() + "~" + getNowFormatDate());
	}

});