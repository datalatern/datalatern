/**
 * Created by liuw on 2016/9/17.
 * 加载杭州热力分布图
 */
(function(){
    var dom = document.getElementById("main");
    var myChart = echarts.init(dom);
    var app = {};
    var option = null;
    app.title = '热力图与百度地图扩展';
    var place='hangzhou';
    var center=[120.13066322374, 30.240018034923];
    loadTrack(place,center);
    var $inp = $('#place'); //所有的input元素
    $inp.keypress(function (e) { //这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。
        var key = e.which; //e.which是按键的值
        if (key == 13) {
            console.log($('#place').toPinyin())
            if($('#place').toPinyin()=='Shang Hai '){
                place='shanghai';
                center=[121.10689398326,31.232254414884];
            }else if($('#place').toPinyin()=='Ping Gu '){
                place='pinggu';
                center=[117.14214975819,40.261062966485];
            }
            loadTrack(place,center);
        }
    });
    function loadTrack(place,center){
        $.get('./../public/data/'+place+'-tracks.json', function (data) {
            var points = [].concat.apply([], data.map(function (track) {
                return track.map(function (seg) {
                    return seg.coord.concat([1]);
                });
            }));
            myChart.setOption(option = {
                animation: false,
                bmap: {
                    //center: [120.13066322374, 30.240018034923],
                    center: center,
                    zoom: 14,
                    roam: true
                },
                visualMap: {
                    show: false,
                    top: 'top',
                    min: 0,
                    max: 5,
                    seriesIndex: 0,
                    calculable: true,
                    inRange: {
                        color: ['blue', 'blue', 'green', 'yellow', 'red']
                    }
                },
                series: [{
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    data: points,
                    pointSize: 5,
                    blurSize: 6
                }]
            });
            if (!app.inNode) {
                // 添加百度地图插件
                var bmap = myChart.getModel().getComponent('bmap').getBMap();
                bmap.addControl(new BMap.MapTypeControl());
            }
        });
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
})()