/**
 * Created by liuw on 2016/9/17.
 * 加载关系图数据
 */

(function(){
    var myChart = echarts.init(document.getElementById('main'),'macarons');
    //myChart.showLoading();
    $.get('./../public/data/webkit-dep.json', function (webkitDep) {
        myChart.hideLoading();

        option = {
            legend: {
                data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
            },
            series: [{
                type: 'graph',
                layout: 'force',
                animation: false,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                draggable: true,
                data: webkitDep.nodes.map(function (node, idx) {
                    node.id = idx;
                    return node;
                }),
                categories: webkitDep.categories,
                force: {
                    // initLayout: 'circular'
                    // gravity: 0
                    // repulsion: 20,
                    edgeLength: 5,
                    repulsion: 20
                },
                edges: webkitDep.links
            }]
        };

        myChart.setOption(option);
    });
})()