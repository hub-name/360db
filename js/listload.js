function webList(data) {
	//console.log(data);
	var dataLength = data.length;
	if (dataLength<9) {
		for(var i = 1; i <= dataLength; i++) {
			var thisUrl = data[i-1].key;
			var thisCount = data[i-1].doc_count;
			$(".m-web li").eq(i).find(".mw-url").html(thisUrl.substring(0,30));
			$(".m-web li").eq(i).find(".mw-num").html(thisCount);
		}
		for (var i = dataLength+1; i <= 9; i++) {
			$(".m-web li").eq(i).find(".mw-url").html("&nbsp;");
			$(".m-web li").eq(i).find(".mw-num").html("&nbsp;");
		}
	} else{
		for(var i = 1; i <= 9; i++) {
			var thisUrl = data[i-1].key;
			var thisCount = data[i-1].doc_count;
			$(".m-web li").eq(i).find(".mw-url").html(thisUrl.substring(0,30));
			$(".m-web li").eq(i).find(".mw-num").html(thisCount);
		}
	}

}

function attackList(data) {
	//console.log(data);
	var dataLength = data.length;
	//console.log(dataLength,data[1]);
	if (dataLength<9) {
		//alert("a")
		for(var i = 1; i <= dataLength; i++) {
			var thisTime = data[i-1].Time;
			var thisAim = data[i-1].Aim;
			var thisType = data[i-1].Type;
			var thisSource = data[i-1].Source;
			$(".m-atkList li").eq(i).find(".mal-time").html(thisTime);
			$(".m-atkList li").eq(i).find(".mal-aim").html(thisAim);
			$(".m-atkList li").eq(i).find(".mal-type").html(thisType);
			$(".m-atkList li").eq(i).find(".mal-source").html(thisSource);
		}
		for (var i = dataLength+1; i <= 9; i++) {
			$(".m-atkList li").eq(i).find(".mal-time").html("&nbsp;");
			$(".m-atkList li").eq(i).find(".mal-aim").html("&nbsp;");
			$(".m-atkList li").eq(i).find(".mal-type").html("&nbsp;");
			$(".m-atkList li").eq(i).find(".mal-source").html("&nbsp;");
		}
	} else{
		//alert("b")
		for(var i = 1; i <= 9; i++) {
			//console.log(data[i-1]._source.dip);
			var thisTime = data[i-1]._source.occur_time;
			var thisAim = data[i-1]._source.dip;
			var thisType = data[i-1]._source.name;
			var thisSource = data[i-1]._source.sip;
			$(".m-atkList li").eq(i).find(".mal-time").html(thisTime.substring(11,19));
			$(".m-atkList li").eq(i).find(".mal-aim").html(thisAim);
			$(".m-atkList li").eq(i).find(".mal-type").html(thisType);
			$(".m-atkList li").eq(i).find(".mal-source").html(thisSource);
		}
	}

}

function gcalrn(data){
	//console.log(data.length);
	var gcaAll = 0;
	for (var i=0; i<data.length; i++) {
		//console.log(data[i].key);
		if (data[i].key == "高") {
			$("#gca-high").html("高危："+data[i].doc_count);
		} else if (data[i].key == "中") {
			$("#gca-middle").html("中危："+data[i].doc_count);
		} else if (data[i].key == "低") {
			$("#gca-low").html("低危："+data[i].doc_count);
		}
		 gcaAll += data[i].doc_count;
	}
	$("#gca-all").html("攻击总数："+gcaAll);
	//console.log(gcaAll);
}
