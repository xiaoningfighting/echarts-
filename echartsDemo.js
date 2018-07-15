//页面渲染
(function(){
    $(".bus_nav_active").map(function(){
        $(this).css("left", $(this).closest(".bus-sta_nav").find(".active a").offset().left);
    });
    //父饼图
    var ordersPieChart= echarts.init(document.getElementById('ordersPieChart'));//初始化
    var oPieOptions={
        backgroundColor: '#fff',
        color: ['#27c6e3','#1d79da'],
        title:{
            show:true,
            text:'2018/07/05',
            right:0,
            top:0,
            z:3,
            textStyle:{
                color:'#333',
                fontFamily:"PingFangSC-Regular",
                fontWeight:"normal",
                fontSize:12
            }
        },
        series : [
            {
                name:'面审量',
                type:'pie',//饼图
                radius : '55%',//半径
                center: ['50%', '50%'],//位置
                data:[//数据 可根据项目情况封装
                    {
                        value:9,//值
                        name:"个人",//每个扇区的名称
                        code:1,//自定义属性 可在项目需要时添加
                        label: {//各扇区的标签
                            show:true,
                            position:'inside',//位置
                            padding:[-5,10,5,0],
                            normal: {
                                formatter:[ //自定义标签
                                    '{label|{b}:}{con1|{c}单}{row|}',//b是name值c是value值
                                    '{label|金额:}{con| 100万元}'
                                ].join('\n'),
                                rich:{//富文本编辑
                                    row:{ //  css类名样式
                                        height:10,
                                    },
                                    label:{
                                        color:"#333",
                                        align:'left',
                                        fontSize:10
                                    },
                                    con1:{
                                        color:"#fc3f3f",
                                        align:'left',
                                        fontSize:10,
                                        bottom:10
                                    },
                                    con:{
                                        color:"#fc3f3f",
                                        align:'left',
                                        fontSize:10,
                                        bottom:10
                                    }
                                }
                            },
                        }
                    },
                    {
                        value:3,
                        name:"机构",
                         code:2,//自定义属性 可在项目需要时添加
                        label: {//各扇区的标签
                            show:true,
                            position:'inside',//位置
                            padding:[-5,10,5,0],
                            normal: {
                                formatter:[ //自定义标签
                                    '{label|{b}:}{con1|{c}单}{row|}',//b是name值c是value值
                                    '{label|金额:}{con| 30万元}'
                                ].join('\n'),
                                rich:{//富文本编辑
                                    row:{ //  css类名样式
                                        height:10,
                                    },
                                    label:{
                                        color:"#333",
                                        align:'left',
                                        fontSize:10
                                    },
                                    con1:{
                                        color:"#fc3f3f",
                                        align:'left',
                                        fontSize:10,
                                        bottom:10
                                    },
                                    con:{
                                        color:"#fc3f3f",
                                        align:'left',
                                        fontSize:10,
                                        bottom:10
                                    }
                                }
                            },
                        }
                    },{
                        value:0,
                        name:"产品",
                         code:3,//自定义属性 可在项目需要时添加
                        label: {//各扇区的标签
                            show:true,
                            position:'inside',//位置
                            padding:[-5,10,5,0],
                            normal: {
                                formatter:[ //自定义标签
                                    '{label|{b}:}{con1|{c}单}{row|}',//b是name值c是value值
                                    '{label|金额:}{con| 0万元}'
                                ].join('\n'),
                                rich:{//富文本编辑
                                    row:{ //  css类名样式
                                        height:10,
                                    },
                                    label:{
                                        color:"#333",
                                        align:'left',
                                        fontSize:10
                                    },
                                    con1:{
                                        color:"#fc3f3f",
                                        align:'left',
                                        fontSize:10,
                                        bottom:10
                                    },
                                    con:{
                                        color:"#fc3f3f",
                                        align:'left',
                                        fontSize:10,
                                        bottom:10
                                    }
                                }
                            },
                        }
                    }
                ].sort(function (a, b) { return a.value - b.value; }),
                 // minAngle:50, //设置最小角度
                labelLine: {//标签的视觉引导线样式
                    show:true,
                    normal: {
                        lineStyle: {
                            color: '#fc3f3f'
                        },
                        smooth: 0.1,//光滑度
                        length: 8,//第一条线长
                        length2: 16///第2条转折线长
                    }
                },
                animationType: 'scale',//初始动画效果 缩放效果
                animationEasing: 'elasticOut',//初始动画的缓动效果
                animationDelay: function (idx) {
                    return Math.random() * 200;//初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表
    ordersPieChart.setOption(oPieOptions);
    //饼图点击事件
    ordersPieChart.on('click', function (params) {
        console.log("饼图点击");
        console.info(params);
        alert(params.name+":"+params.value+"单");

    });
    //产品统计 柱图折线图二合一
    var proBarChart= echarts.init(document.getElementById('proBarChart'));//初始化
    var proBarOpt={
        backgroundColor: '#fff',
        color: ['#fc3f3f','#1d79da'],
        title:{
            show:true,
            text:'2018/07/05',
            right:0,
            top:0,
            z:3,
            textStyle:{
                color:'#333',
                fontFamily:"PingFangSC-Regular",
                fontWeight:"normal",
                fontSize:12
            }
        },
        grid:{//网格
            height:100,
            // width:"100%",
            top:50,
            right:0,
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show:false,
                alignWithLabel: true,
                length:0
            },
            axisLabel:{//x坐标轴刻度标签
                color:"#333",
                fontSize:10,
                showMinLabel:true,//是否显示最小 tick 的 label
                showMaxLabel:true,
                interval:0,// 0 强制显示所有标签。1隔一个标签显示一个标签2，隔两标签显示1个标签，以此类推
                rotate:-90//刻度标签旋转的角度，在类目轴的类目标签显示不下时可通过旋转防止标签重叠。-90 度到 90 度（默认0）
            },
            axisLine:{
                show:true,//显示坐标轴线
                onZero:true,
                lineStyle:{
                    color:'#bcbcbc',
                    type:'solid'
                }
            },
            data:["睿易贷","云易贷","我想贷","随便贷","有趣贷","随意贷","云想贷","你想贷","睿可贷","有可贷"]
        },
        yAxis:[
             {
                type: 'value',
                name:'单',
                nameLocation:'end',
                nameTextStyle:{
                    color:'#fc3f3f',
                    align:'left'

                },
                    scale:false,//显示零刻度
                    axisLabel: {
                        formatter: '{value} ',//单
                        color:'#fc3f3f',
                        fontSize:12
                    },
                    axisTick:{ //坐标轴刻度
                        show:false,
                        length:10,

                    },
                    axisLine:{
                        show:true,//显示坐标轴线
                        onZero:true,
                        lineStyle:{
                            color:'#bcbcbc',
                            type:'solid'
                        }
                    },
                    splitLine:{ //坐标轴在 grid 区域中的分隔区
                        lineStyle:{
                            type:'solid',
                            color:'#ededed'
                        }
                    },
                    splitArea:{
                        show:true,
                        areaStyle:{
                            color:['#fff','#fff']
                        }
                    }
                },
                {
                    splitLine:{show: false},
                    type: 'value'
                }
        ],
        dataZoom:[//缩放
            {
                type: 'slider',//对应第一个y轴
                show: false,
                start: 0,//%
                end: 100,
                // handleSize: 8
            },
            {
                type: 'inside',//区域缩放
                start:0,
                end: 100
            },
            {
                type: 'slider',
                show: false,
                yAxisIndex: 1,//第二个y轴
                filterMode: 'empty',
                width: 12,
                height: '70%',
                // handleSize: 8,
                showDataShadow: false,
                left: '93%'
            }
        ],
        series : [
            
             {
                type:'line',//折线图
                 data:[100,15,1,3,0,5,150,5,0,7],
                yAxisIndex:0,
                connectNulls:true,
                smooth: "none",//拐点样式
                lineStyle:{
                    width:1,
                    type:'solid'
                }
            },
            {
                type:'bar',//柱状图
                data:[600,170000,700,6,800,6000,1700,70,600,8],
                 yAxisIndex:1,
                itemStyle:{//每个柱子的样式
                    normal: {
                        barBorderRadius: [5, 5, 0, 0],//
                        label: {//标签
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#333',
                                fontSize:12

                            },
                            formatter:function(params){//内容 params柱子的参数
                                if(params.value==0){
                                    return '';
                                }else
                                {
                                    return params.value+"万";
                                }
                            }
                        }
                    }
                },
                // barWidth:15,//当设置dataZoom缩放 宽度也自适应时 不能设置宽度
                  barMaxWidth:40,//最大宽度 
                // barMinWidth:10,
                animationDurationUpdate: 1200//数据更新动画的时长。
            },
        ]
    };
    proBarChart.setOption(proBarOpt);
    //柱图点击事件
    proBarChart.on('click', function (params) {
        console.log("柱状图点击");
       console.info(params);
        alert(params.name+":"+params.value+"万");

    });
})();
//页面逻辑
(function(){
    //顶部搜索点击
    $(".bus-sea_row").click(function(){
        $(".busStatic-wrap").addClass("none");
       $(".busSearch-wrap").removeClass("none");
    });
    //顶部导航 面审量等切换
    $(".bus_nav_cell a").click(function(){
        $(this).closest(".bus_nav_cell").addClass("active").siblings(".bus_nav_cell").removeClass("active");
        var leftWidth=parseFloat($(this).offset().left);
        var $activeBar= $(this).closest(".bus-sta_nav").find(".bus_nav_active");
        var leftShort=leftWidth-parseFloat($activeBar.css("left").split("px")[0]);
        if(leftWidth==0){
            leftShort=0;
        }
        $activeBar.css({
            "transform": "translate("+leftShort+"px)",
            "-ms-transform": "translate("+leftShort+"px)",
            "-moz-transform": "translate("+leftShort+"px)",
            "-webkit-transform": "translate("+leftShort+"px)",
            "-o-transform": "translate("+leftShort+"px)"
        });
    });
    
})();

