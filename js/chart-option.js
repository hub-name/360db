var lineChart = {
	baseOption: option = {
		calculable: true,
		xAxis: [{
			type: "category",
			boundaryGap: false,
			data: [],
			splitLine: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "rgb(220, 218, 225)",
					width: 0
				}
			},
			axisTick: {
				show: false
			},
			splitArea: {
				show: false
			},
            axisLabel: {
                textStyle: {
                    color: "#7ec9ff"
                }
            }
		}],
		yAxis: [{
			type: "value",
			axisLine: {
				show: false,
				lineStyle: {
					color: "rgb(220, 218, 225)",
					width: 1
				}
			},
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#0e1c2f"
                }
            },
			splitArea: {
				show: false
			},
			scale: false,
			axisLabel: {
				formatter: "{value}"
			},
            axisLabel: {
                textStyle: {
                    color: "#7ec9ff"
                }
            },
            axisTick:{
            	show: false
            }
		}],
		series: [{
			name: "攻击次数",
			type: "line",
			smooth: true,
			itemStyle: {
				normal: {
					areaStyle: {
						type: "default",
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								  offset: 0, color: 'rgba(156,91,254,0.3)' // 0% 处的颜色
								}, {
								  offset: 1, color: 'rgba(35,154,255,0.3)' // 100% 处的颜色
								}], false)
					},
					borderWidth: 2,
					borderColor: "rgb(93, 66, 149)",
					lineStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								  offset: 0, color: 'rgba(156,91,254,1)' // 0% 处的颜色
								}, {
								  offset: 1, color: 'rgba(35,154,255,1)' // 100% 处的颜色
								}], false)
					},
					color: "rgb(255, 255, 255)"
				}
			},
			data: [],
			symbol: "circle",
			symbolSize: 0,
			tooltip: {
				formatter: "{a}:{c}"
			}
		}],
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "line",
				lineStyle: {
					color: "rgb(220, 218, 225)",
					width: 1
				}
			},
			textStyle: {
				color: "rgb(255, 255, 255)"
			},
			backgroundColor: "rgb(93, 66, 149)"
		},
		grid: {
			borderWidth: 0,
			x: 50,
			y: 10,
			x2: 20,
			y2: 30
		},
    	animation: false
	}
};
/******设置表类型*********/
	function charSetup(charID, chartype, xAxisData, seriesData) {
		var myChart = echarts.init(document.getElementById(charID));
		chartype.baseOption.xAxis[0].data = xAxisData;
		chartype.baseOption.series[0].data = seriesData;
		myChart.setOption(chartype);
		//console.log("aa")
	}
