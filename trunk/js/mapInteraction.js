/**
 * Created by k on 06/02/2017.
 */
var map = L.map('mapDiv',{
    attributionControl:false,
    zoomControl:false,
    scrollWheelZoom:false,
    wheelPxPerZoomLevel:0,
    minZoom:4,
    maxZoom:4,
    doubleClickZoom:false,
    dragging:false,
    trackResize:false,
    boxZoom:false,
    closePopupOnClick:false
});
var baseLayers = {
    "高德地图": L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        subdomains: "1234"
    }),
    '高德影像': L.layerGroup([L.tileLayer('http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
        subdomains: "1234"
    }), L.tileLayer('http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}', {
        subdomains: "1234"
    })]),
    "立体地图": L.tileLayer('https://a.tiles.mapbox.com/v3/examples.c7d2024a/{z}/{x}/{y}.png', {
        attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        key: 'BC9A493B41014CAABB98F0471D759707',
        styleId: 22677
    }),
    "百度地图":L.tileLayer('http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20150518').addTo(map),
    'GeoQ灰色底图': L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'),
    "Foursquare": L.tileLayer('https://a.tiles.mapbox.com/v3/foursquare.map-0y1jh28j/{z}/{x}/{y}.png', {
        attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        key: 'BC9A493B41014CAABB98F0471D759707',
        styleId: 22677
    })
};
L.tileLayer('https://a.tiles.mapbox.com/v3/foursquare.map-0y1jh28j/{z}/{x}/{y}.png', {
    attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    key: 'BC9A493B41014CAABB98F0471D759707',
    styleId: 22677
});
// var layercontrol = L.control.layers(baseLayers,{}, {
//  position: "topright"
//  }).addTo(map);
var popup = L.popup();
map.setView(L.latLng(36.500339, 103.814129), 4);
var overlay = new L.echartsLayer3(map, echarts);
var chartsContainer = overlay.getEchartsContainer();
var targetName;
var data = [
    {name: '海门', value: 9,data:""},
    {name: '鄂尔多斯', value: 12,data:""},
    {name: '招远', value: 12,data:""},
    {name: '舟山', value: 12,data:""},
    {name: '齐齐哈尔', value: 14,data:""},
    {name: '盐城', value: 15,data:""},
    {name: '赤峰', value: 16,data:""},
    {name: '青岛', value: 18,data:""},
    {name: '乳山', value: 18,data:""},
    {name: '金昌', value: 19,data:""},
    {name: '泉州', value: 21,data:""},
    {name: '莱西', value: 21,data:""},
    {name: '日照', value: 21,data:""},
    {name: '胶南', value: 22,data:""},
    {name: '南通', value: 23,data:""},
    {name: '拉萨', value: 24,data:""},
    {name: '云浮', value: 24,data:""},
    {name: '梅州', value: 25,data:""},
    {name: '文登', value: 25,data:""},
    {name: '上海', value: 25,data:""},
    {name: '攀枝花', value: 25,data:""},
    {name: '威海', value: 25,data:""},
    {name: '承德', value: 25,data:""},
    {name: '厦门', value: 26,data:""},
    {name: '汕尾', value: 26,data:""},
    {name: '潮州', value: 26,data:""},
    {name: '丹东', value: 27,data:""},
    {name: '太仓', value: 27,data:""},
    {name: '曲靖', value: 27,data:""},
    {name: '烟台', value: 28,data:""},
    {name: '福州', value: 29,data:""},
    {name: '瓦房店', value: 30,data:""},
    {name: '即墨', value: 30,data:""},
    {name: '抚顺', value: 31,data:""},
    {name: '玉溪', value: 31,data:""},
    {name: '张家口', value: 31,data:""},
    {name: '阳泉', value: 31,data:""},
    {name: '莱州', value: 32,data:""},
    {name: '湖州', value: 32,data:""},
    {name: '汕头', value: 32,data:""},
    {name: '昆山', value: 33,data:""},
    {name: '宁波', value: 33,data:""},
    {name: '湛江', value: 33,data:""},
    {name: '揭阳', value: 34,data:""},
    {name: '荣成', value: 34,data:""},
    {name: '连云港', value: 35,data:""},
    {name: '葫芦岛', value: 35,data:""},
    {name: '常熟', value: 36,data:""},
    {name: '东莞', value: 36,data:""},
    {name: '河源', value: 36,data:""},
    {name: '淮安', value: 36,data:""},
    {name: '泰州', value: 36,data:""},
    {name: '南宁', value: 37,data:""},
    {name: '营口', value: 37,data:""},
    {name: '惠州', value: 37,data:""},
    {name: '江阴', value: 37,data:""},
    {name: '蓬莱', value: 37,data:""},
    {name: '韶关', value: 38,data:""},
    {name: '嘉峪关', value: 38,data:""},
    {name: '广州', value: 38,data:""},
    {name: '延安', value: 38,data:""},
    {name: '太原', value: 39,data:""},
    {name: '清远', value: 39,data:""},
    {name: '中山', value: 39,data:""},
    {name: '昆明', value: 39,data:""},
    {name: '寿光', value: 40,data:""},
    {name: '盘锦', value: 40,data:""},
    {name: '长治', value: 41,data:""},
    {name: '深圳', value: 41,data:""},
    {name: '珠海', value: 42,data:""},
    {name: '宿迁', value: 43,data:""},
    {name: '咸阳', value: 43,data:""},
    {name: '铜川', value: 44,data:""},
    {name: '平度', value: 44,data:""},
    {name: '佛山', value: 44,data:""},
    {name: '海口', value: 44,data:""},
    {name: '江门', value: 45,data:""},
    {name: '章丘', value: 45,data:""},
    {name: '肇庆', value: 46,data:""},
    {name: '大连', value: 47,data:""},
    {name: '临汾', value: 47,data:""},
    {name: '吴江', value: 47,data:""},
    {name: '石嘴山', value: 49,data:""},
    {name: '沈阳', value: 50,data:""},
    {name: '苏州', value: 50,data:""},
    {name: '茂名', value: 50,data:""},
    {name: '嘉兴', value: 51,data:""},
    {name: '长春', value: 51,data:""},
    {name: '胶州', value: 52,data:""},
    {name: '银川', value: 52,data:""},
    {name: '张家港', value: 52,data:""},
    {name: '三门峡', value: 53,data:""},
    {name: '锦州', value: 54,data:""},
    {name: '南昌', value: 54,data:""},
    {name: '柳州', value: 54,data:""},
    {name: '三亚', value: 54,data:""},
    {name: '自贡', value: 56,data:""},
    {name: '吉林', value: 56,data:""},
    {name: '阳江', value: 57,data:""},
    {name: '泸州', value: 57,data:""},
    {name: '西宁', value: 57,data:""},
    {name: '宜宾', value: 58,data:""},
    {name: '呼和浩特', value: 58,data:""},
    {name: '成都', value: 58,data:""},
    {name: '大同', value: 58,data:""},
    {name: '镇江', value: 59,data:""},
    {name: '桂林', value: 59,data:""},
    {name: '张家界', value: 59,data:""},
    {name: '宜兴', value: 59,data:""},
    {name: '北海', value: 60,data:""},
    {name: '西安', value: 61,data:""},
    {name: '金坛', value: 62,data:""},
    {name: '东营', value: 62,data:""},
    {name: '牡丹江', value: 63,data:""},
    {name: '遵义', value: 63,data:""},
    {name: '绍兴', value: 63,data:""},
    {name: '扬州', value: 64,data:""},
    {name: '常州', value: 64,data:""},
    {name: '潍坊', value: 65,data:""},
    {name: '重庆', value: 66,data:""},
    {name: '台州', value: 67,data:""},
    {name: '南京', value: 67,data:""},
    {name: '滨州', value: 70,data:""},
    {name: '贵阳', value: 71,data:""},
    {name: '无锡', value: 71,data:""},
    {name: '本溪', value: 71,data:""},
    {name: '克拉玛依', value: 72,data:""},
    {name: '渭南', value: 72,data:""},
    {name: '马鞍山', value: 72,data:""},
    {name: '宝鸡', value: 72,data:""},
    {name: '焦作', value: 75,data:""},
    {name: '句容', value: 75,data:""},
    {name: '北京', value: 79,data:""},
    {name: '徐州', value: 79,data:""},
    {name: '衡水', value: 80,data:""},
    {name: '包头', value: 80,data:""},
    {name: '绵阳', value: 80,data:""},
    {name: '乌鲁木齐', value: 84,data:""},
    {name: '枣庄', value: 84,data:""},
    {name: '杭州', value: 84,data:""},
    {name: '淄博', value: 85,data:""},
    {name: '鞍山', value: 86,data:""},
    {name: '溧阳', value: 86,data:""},
    {name: '库尔勒', value: 86,data:""},
    {name: '安阳', value: 90,data:""},
    {name: '开封', value: 90,data:""},
    {name: '济南', value: 92,data:""},
    {name: '德阳', value: 93,data:""},
    {name: '温州', value: 95,data:""},
    {name: '九江', value: 96,data:""},
    {name: '邯郸', value: 98,data:""},
    {name: '临安', value: 99,data:""},
    {name: '兰州', value: 99,data:""},
    {name: '沧州', value: 100,data:""},
    {name: '临沂', value: 103,data:""},
    {name: '南充', value: 104,data:""},
    {name: '天津', value: 105,data:""},
    {name: '富阳', value: 106,data:""},
    {name: '泰安', value: 112,data:""},
    {name: '诸暨', value: 112,data:""},
    {name: '郑州', value: 113,data:""},
    {name: '哈尔滨', value: 114,data:""},
    {name: '聊城', value: 116,data:""},
    {name: '芜湖', value: 117,data:""},
    {name: '唐山', value: 119,data:""},
    {name: '平顶山', value: 119,data:""},
    {name: '邢台', value: 119,data:""},
    {name: '德州', value: 120,data:""},
    {name: '济宁', value: 120,data:""},
    {name: '荆州', value: 127,data:""},
    {name: '宜昌', value: 130,data:""},
    {name: '义乌', value: 132,data:""},
    {name: '丽水', value: 133,data:""},
    {name: '洛阳', value: 134,data:""},
    {name: '秦皇岛', value: 136,data:""},
    {name: '株洲', value: 143,data:""},
    {name: '石家庄', value: 147,data:""},
    {name: '莱芜', value: 148,data:""},
    {name: '常德', value: 152,data:""},
    {name: '保定', value: 153,data:""},
    {name: '湘潭', value: 154,data:""},
    {name: '金华', value: 157,data:""},
    {name: '岳阳', value: 169,data:""},
    {name: '长沙', value: 175,data:""},
    {name: '衢州', value: 177,data:""},
    {name: '廊坊', value: 193,data:""},
    {name: '菏泽', value: 194,data:""},
    {name: '合肥', value: 229,data:""},
    {name: '武汉', value: 273,data:""},
    {name: '大庆', value: 279,data:""}
];
var geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '招远':[120.38,37.35],
    '舟山':[122.207216,29.985295],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '太仓':[121.1,31.45],
    '曲靖':[103.79,25.51],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '昆山':[120.95,31.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '连云港':[119.16,34.59],
    '葫芦岛':[120.836932,40.711052],
    '常熟':[120.74,31.64],
    '东莞':[113.75,23.04],
    '河源':[114.68,23.73],
    '淮安':[119.15,33.5],
    '泰州':[119.9,32.49],
    '南宁':[108.33,22.84],
    '营口':[122.18,40.65],
    '惠州':[114.4,23.09],
    '江阴':[120.26,31.91],
    '蓬莱':[120.75,37.8],
    '韶关':[113.62,24.84],
    '嘉峪关':[98.289152,39.77313],
    '广州':[113.23,23.16],
    '延安':[109.47,36.6],
    '太原':[112.53,37.87],
    '清远':[113.01,23.7],
    '中山':[113.38,22.52],
    '昆明':[102.73,25.04],
    '寿光':[118.73,36.86],
    '盘锦':[122.070714,41.119997],
    '长治':[113.08,36.18],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '宿迁':[118.3,33.96],
    '咸阳':[108.72,34.36],
    '铜川':[109.11,35.09],
    '平度':[119.97,36.77],
    '佛山':[113.11,23.05],
    '海口':[110.35,20.02],
    '江门':[113.06,22.61],
    '章丘':[117.53,36.72],
    '肇庆':[112.44,23.05],
    '大连':[121.62,38.92],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '石嘴山':[106.39,39.04],
    '沈阳':[123.38,41.8],
    '苏州':[120.62,31.32],
    '茂名':[110.88,21.68],
    '嘉兴':[120.76,30.77],
    '长春':[125.35,43.88],
    '胶州':[120.03336,36.264622],
    '银川':[106.27,38.47],
    '张家港':[120.555821,31.875428],
    '三门峡':[111.19,34.76],
    '锦州':[121.15,41.13],
    '南昌':[115.89,28.68],
    '柳州':[109.4,24.33],
    '三亚':[109.511909,18.252847],
    '自贡':[104.778442,29.33903],
    '吉林':[126.57,43.87],
    '阳江':[111.95,21.85],
    '泸州':[105.39,28.91],
    '西宁':[101.74,36.56],
    '宜宾':[104.56,29.77],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '大同':[113.3,40.12],
    '镇江':[119.44,32.2],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '库尔勒':[86.06,41.68],
    '安阳':[114.35,36.1],
    '开封':[114.35,34.79],
    '济南':[117,36.65],
    '德阳':[104.37,31.13],
    '温州':[120.65,28.01],
    '九江':[115.97,29.71],
    '邯郸':[114.47,36.6],
    '临安':[119.72,30.23],
    '兰州':[103.73,36.03],
    '沧州':[116.83,38.33],
    '临沂':[118.35,35.05],
    '南充':[106.110698,30.837793],
    '天津':[117.2,39.13],
    '富阳':[119.95,30.07],
    '泰安':[117.13,36.18],
    '诸暨':[120.23,29.71],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '聊城':[115.97,36.45],
    '芜湖':[118.38,31.33],
    '唐山':[118.02,39.63],
    '平顶山':[113.29,33.75],
    '邢台':[114.48,37.05],
    '德州':[116.29,37.45],
    '济宁':[116.59,35.38],
    '荆州':[112.239741,30.335165],
    '宜昌':[111.3,30.7],
    '义乌':[120.06,29.32],
    '丽水':[119.92,28.45],
    '洛阳':[112.44,34.7],
    '秦皇岛':[119.57,39.95],
    '株洲':[113.16,27.83],
    '石家庄':[114.48,38.03],
    '莱芜':[117.67,36.19],
    '常德':[111.69,29.05],
    '保定':[115.48,38.85],
    '湘潭':[112.91,27.87],
    '金华':[119.64,29.12],
    '岳阳':[113.09,29.37],
    '长沙':[113,28.21],
    '衢州':[118.88,28.97],
    '廊坊':[116.7,39.53],
    '菏泽':[115.480656,35.23375],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
    '大庆':[125.03,46.58]
};
var availableTags=[];
data.map(function (v, i) {
    availableTags.push(v.name);
});
//定位的点
var effectdata = [];
$(function () {
    initEvent();
    createMap();
});
function contains(value, array) {
    for (var i = 0; i < array.length; i++) {
        var valueInArray = array[i].name;
        valueInArray = valueInArray.substring(0, valueInArray.indexOf(":"));
        if (value === valueInArray) {
            return i;
        }
    }
    return -1;
}
function initEvent() {
    $("#productTypeList a").on("click", function (evt) {
        console.log(evt.target);
        if ($(evt.target).attr("flag") === "true") {
            $(evt.target).next().css("display", "block");
            $(evt.target).attr("flag", "false");
        } else {
            $(evt.target).next().css("display", "none");
            $(evt.target).attr("flag", "true");
        }
    });
    $(".productType").keydown(function (evt) {
        if (evt.keyCode === 13) {
            if (!!$(this).val()) {
                var originInnerHTML = $(evt.target).prev()[0].innerHTML.substring(0, $(evt.target).prev()[0].innerHTML.lastIndexOf(">") + 1);
                $(evt.target).prev().html(originInnerHTML + " " + $(this).val());
            }
            $(evt.target).css("display", "none");
        }
    });
    //地图编辑
    $("#locateArea").autocomplete({
        source: availableTags
    });
    $("#locateCity").autocomplete({
        source: availableTags
    });
    $("#mainTitle").keydown(function (event) {
        if (event.keyCode === 13) {
            var mainTitle = $("#mainTitle").val();
            var subTitle = $("#subTitle").val();
            if (mainTitle) {
                createMap(mainTitle, subTitle);
            } else {
                alert("请输入标题");
            }
        }
    });
    $("#subTitle").keydown(function (event) {
        if (event.keyCode === 13) {
            var mainTitle = $("#mainTitle").val();
            var subTitle = $("#subTitle").val();
            if (subTitle) {
                createMap(mainTitle, subTitle);
            } else {
                alert("请输入标题");
            }

        }
    });
    $("#locateArea").keydown(function (event) {
        if (event.keyCode === 13) {
            var locateData = $("#locateArea").val();
            var mainTitle = $("#mainTitle").val();
            var subTitle = $("#subTitle").val();

            if (!!locateData) {
                createMap(mainTitle, subTitle, locateData);
            } else {
                alert("请输入要搜索的城市");
            }
        }
    });
    $("#locateCity").keydown(function (event) {
        if (event.keyCode === 13) {
            var locateData = $("#locateCity").val();
            var mainTitle = $("#mainTitle").val();
            var subTitle = $("#subTitle").val();

            if (!!locateData) {
                createMap(mainTitle, subTitle, locateData);
            } else {
                alert("请输入要搜索的城市");
            }
        }
    })
    $("#btnlocateArea").on("click", function (event) {

        var locateData = $("#locateCity").val();
        var mainTitle = $("#mainTitle").val();
        var subTitle = $("#subTitle").val();

        if (!!locateData) {
            createMap(mainTitle, subTitle, locateData);
        } else {
            alert("请输入要搜索的城市");
        }

    });
    $("#locateSpan").on("click", function (event) {
        var locateData = $("#locateArea").val();
        var mainTitle = $("#mainTitle").val();
        var subTitle = $("#subTitle").val();
        if (!!locateData) {
            createMap(mainTitle, subTitle, locateData);
        } else {
            alert("请输入要搜索的城市");
        }
    });
    $("#tipsForArea").keydown(function (event) {
        if (event.keyCode === 13) {
            var locateData = $("#locateArea").val();
            var mainTitle = $("#mainTitle").val();
            var subTitle = $("#subTitle").val();
            var tipsContent = $("#tipsForArea").val();
            if (!!locateData && !!tipsContent) {
                createMap(mainTitle, subTitle, locateData, tipsContent);
                $("#addTipDiv").css("display", "none");
                $("#tipsForArea").val("");
                //layer.closeAll();
            } else {
                alert("请输入要添加的tips");
            }
        }
    });
    $("#addTips").on("click", function (event) {
        var locateData = $("#locateArea").val();
        var mainTitle = $("#mainTitle").val();
        var subTitle = $("#subTitle").val();
        var tipsContent = $("#tipsForArea").val();
        if (!!locateData && !!tipsContent) {
            createMap(mainTitle, subTitle, locateData, tipsContent);
            $("#addTipDiv").css("display", "none");
            $("#tipsForArea").val("");
        } else {
            alert("请输入要添加的tips");
        }
    });

    //关键数据说明增加新项目
    $("#addItem").on("click", function (evt) {
        var txtBlock = [];
        $("#productTypeList .txtarea").each(function (index, value) {
            var that = value;
            var textareaShow = $(that).css("display")
            if (textareaShow === "block") {
                txtBlock.push(index);
                alert("请先保存编辑项目再继续添加！");
            }
        });
        if (txtBlock.length === 0) {
            var tempDom = $('<li style="padding: 6px;"> ' +
                '<a href="javascript:void(0);" flag="true"> ' +
                '<i class="fa fa-circle text-navy"></i> 点击修改</a> ' +
                '<textarea placeholder="请输入修改内容，并回车保存" class="txtarea" style="width: 100%;height: 100%;min-height: 60px;display: block;border: lightskyblue;/*background-color: #FAFAD2*/"></textarea> ' +
                '</li>');
            //tempDom.insertAfter($("#productTypeList > li:last-child"));
            $("#productTypeList").append(tempDom);
            $("#productTypeList a").last().on("click", function (evt) {
                console.log(evt.target);
                if ($(evt.target).attr("flag") === "true") {
                    $(evt.target).next().css("display", "block");
                    $(evt.target).attr("flag", "false");
                } else {
                    $(evt.target).next().css("display", "none");
                    $(evt.target).attr("flag", "true");
                }
            });
            $("#productTypeList .txtarea").last().keydown(function (evt) {
                if (evt.keyCode === 13 && !evt.shiftKey) {
                    evt.preventDefault();
                    if (!!$(this).val()) {
                        var originInnerHTML = $(evt.target).prev()[0].innerHTML.substring(0, $(evt.target).prev()[0].innerHTML.lastIndexOf(">") + 1);
                        $(evt.target).prev().html(originInnerHTML + " " + $(this).val());
                    }
                    $(evt.target).css("display", "none");
                }
            });
        }
    });
    //编辑数据观点
    $("#showNotes").on("click", function (evt) {
        $("#showNotes").css("display", "none");
        $("#editNotes").css("display", "block");
    });
    $("#saveEditNotes").on("click", function (evt) {
        var editNotesContent = $("#editNotes").val();
        if (!editNotesContent) {
            if (confirm("您确定不填写内容吗?")) {
                $("#showNotes").css("display", "block");
                $("#editNotes").css("display", "none");
            }
        }
        $("#showNotes").text(editNotesContent);
        $("#showNotes").css("display", "block");
        $("#editNotes").val("");
        $("#editNotes").css("display", "none");
    });
    $("#quitEditNotes").on("click", function (evt) {
        $("#showNotes").css("display", "block");
        $("#editNotes").val("");
        $("#editNotes").css("display", "none");
    });

    $(".text-legend").mouseover(function (evt) {
        $(evt.target).next().next().css("visibility", "visible");
    }).mouseout(function (evt) {
        $(evt.target).next().next().css("visibility", "hidden");
    });
    //分享至邮箱
    $('#sendEmail').on('click', function () {
        layer.open({
            type: 1,
            title: "",
            offset: "150px",
            resize: true,
//                move:".layui-layer-title",
            scrollbar: false,
            area: ['600px', '360px'],
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding: 50px;">' +
            '<h1 style="font-size: 34px;font-weight: normal;padding: 5px 0 30px 12px;">Share this Widget</h1> ' +
            '<ul class="category-list" style="padding: 0px 0 5px 0"> ' +
            '<li> ' +
            '<div class="form-group margin-bottom-none" style="padding-bottom: 65px;"> ' +
            '<div class="col-sm-9"> ' +
            '<input class="form-control input-sm" id="mailAddress" placeholder="User,group,or email..." style="border: 0px;border-bottom: 1px solid #e5e6e7"> ' +
            '</div> ' +
            '<div class="col-sm-3"> ' +
            '<a id="send">' +
            '<button type="submit" id="" class="btn btn-danger pull-right btn-block btn-sm" style="background-color: #0099CC;border-color: #0099CC;">Send</button> ' +
            '</a>' +
            '</div> ' +
            '</div> ' +
            '</li> ' +
            '<li> ' +
            '<div class="form-group margin-bottom-none"> ' +
            '<div class="col-sm-12"> ' +
            '<input class="form-control " id="saySth" placeholder="Add a personal note..." style="border: 0;border-bottom: 1px solid #e5e6e7;"> ' +
            '</div> ' +
            '</div> ' +
            '</li> ' +
            '</ul>' +
            '</div>'
        });
        $("#send").on("click", function (evt) {
            var sendToAddress = $("#mailAddress").val();
            var whatSays = $("#saySth").val();
            var emailSubject = $("#emailSubject").val() || "网站分享";
            $("#send").attr("href", "mailto:" + sendToAddress + "?subject=" + emailSubject + "&&body=" + whatSays + "%0d%0a链接地址：" + window.location.href);
        });
    });
    //下载为图片
    $("#downloadImg").on("click",function () {
        html2canvas(document.body,{
            onrendered: function(canvas) {
                var targetLink=$("<a/>");
                targetLink=targetLink[0];
                downloadCanvas(targetLink,canvas,"dataMap.png");
                //document.body.appendChild(canvas);
            }
        });
    });
    //地图编辑显示
    $("#editMapshow").on("click",function (evt) {
        $("#editMapH").css("display","inline-block");
        $("#editMapList").css("display","block");
        $("#removeMapEdit").css("display","");
    });
    $("#removeMapEdit").on("click",function () {
        $("#removeMapEdit").css("display","none");
        $("#editMapH").css("display","none");
        $("#editMapList").css("display","none");
    });
    //地图编辑
    $("#editmap").on("click", function () {
        layer.open({
            type: 1,
            title: " ",
            offset: "150px",
            move: ".layui-layer-title",
            scrollbar: false,
            area: ["290px", "420px"],
            resize: true,
            shadeClose: true,
            content: '<div style="padding: 30px;"> ' +
            '<h5 style="font-size: 27px;">地图编辑</h5>' +
            ' <ul class="folder-list m-b-md" style="padding: 0"> ' +
            '<li>' +
            ' <a href="javascript:void(0);"> <i class="fa fa-file-text "></i> 主标题</a>' +
            ' <input type="text" id="mainTitle" class="form-control" placeholder="请输入主标题，并回车确认">' +
            ' </li> ' +
            '<li>' +
            ' <a href="javascript:void(0);"> <i class="fa fa-file-text-o"></i> 副标题</a> ' +
            '<input type="text" id="subTitle" class="form-control" placeholder="请输入副标题，并回车确认">' +
            '</li> ' +
            '<li> ' +
            '<a href="javascript:void(0);"> <i class="fa fa-location-arrow"></i> 区域</a> ' +
            '<input type="text" class="form-control" id="locateArea" placeholder="请输入定位城市，并回车确认"> ' +
            '</li> ' +
            '<li id="addTipDiv" style="display: none;"> ' +
            '<a href="javascript:void(0);"> <i class="fa fa-pencil"></i> 属性</a> ' +
            '<input type="text" class="form-control" id="tipsForArea" placeholder="为城市增加标签，并回车确认"> ' +
            '</li> ' +
            '</ul> ' +
            '</div>'
        });
    });
    $("#productTypeList .txtarea").last().keydown(function (evt) {
        if (evt.keyCode === 13 && !evt.shiftKey) {
            evt.preventDefault();
            if (!!$(this).val()) {
                var originInnerHTML = $(evt.target).prev()[0].innerHTML.substring(0, $(evt.target).prev()[0].innerHTML.lastIndexOf(">") + 1);
                $(evt.target).prev().html(originInnerHTML + " " + $(this).val());
            }
            $(evt.target).css("display", "none");
        }
    });
}
function downloadCanvas(link,canvasObj,imgId) {
    link.href=canvasObj.toDataURL();
    link.download=imgId;
    link.click();
}

function createMap(mainTit, subTit, locatedata, inputtips) {
    var myChart = overlay.initECharts(chartsContainer);

    var tempeffectdata = [];
    //找到输入城市匹配的数据
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        var geoName = data[i].name;
        if (geoCoord && geoName === locatedata) {
            if (!!inputtips) data[i].data = inputtips;
            tempeffectdata.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            })
        }
    }
    if (effectdata.length === 0) {
        effectdata = effectdata.concat(tempeffectdata);
    } else {
        var index = contains(locatedata, effectdata);
        if (index !== -1) {
            effectdata[index] = tempeffectdata[0];
        } else if (index === -1) {
            effectdata = effectdata.concat(tempeffectdata);
        }
    }
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        return res;
    };
    if (!!locatedata && tempeffectdata.length === 0) {
        alert("定位无效，请检查您的地名并重新输入");
    } else if (!!locatedata) {
        $("#addTipDiv").css("display", "");
    }
    var option = {
        title: {
            text: mainTit,
            subtext: subTit,
            left: 'center',
            textStyle: {
                color: 'black'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}',
            show: false
        },
        toolbox: {
            show: false,
            feature: {
                brush: {
                    type: ["rect"]
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                },

            },
            iconStyle: {
                emphasis: {
                    borderColor: "#63B8FF"
                }
            }
        },
        /*geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            left:"30%",
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#004882',
                    borderColor: '#20a6C7'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },*/
        geo: {
            map: 'china',
            roam: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgba(0,0,0,0.4)'
                    }
                }
            },
            roam: false,
            itemStyle: {
                normal:{
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    color:"#F5ECCE"
                },
                emphasis:{
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        series: [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    //return val[2] / 10;
                    return 0;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: "#636363"
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#46bee9'
                    },
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                /*  data: convertData(data.sort(function (a, b) {
                 return b.value - a.value;
                 }).slice(0, 1)),*/
                data: effectdata,
                symbolSize: function (val) {
                    return 20;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    // normal: {
                    //     color: '#f4e925',
                    //     shadowBlur: 10,
                    //     shadowColor: '#333'
                    // }
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(37, 140, 249, 0.8)',
                        color: 'rgba(37, 140, 249, 0.8)'
                    }
                },
                zlevel: 1
            },
          /*  {
                name: 'categoryA',
                type: 'map',
                show:true,
                geoIndex: 0,
                // tooltip: {show: false},
                data:[
                    {name: '北京', value: randomValue()},
                    {name: '天津', value: randomValue()},
                    {name: '上海', value: randomValue()},
                    {name: '重庆', value: randomValue()},
                    {name: '河北', value: randomValue()},
                    {name: '河南', value: randomValue()},
                    {name: '云南', value: randomValue()},
                    {name: '辽宁', value: randomValue()},
                    {name: '黑龙江', value: randomValue()},
                    {name: '湖南', value: randomValue()},
                    {name: '安徽', value: randomValue()},
                    {name: '山东', value: randomValue()},
                    {name: '新疆', value: randomValue()},
                    {name: '江苏', value: randomValue()},
                    {name: '浙江', value: randomValue()},
                    {name: '江西', value: randomValue()},
                    {name: '湖北', value: randomValue()},
                    {name: '广西', value: randomValue()},
                    {name: '甘肃', value: randomValue()},
                    {name: '山西', value: randomValue()},
                    {name: '内蒙古', value: randomValue()},
                    {name: '陕西', value: randomValue()},
                    {name: '吉林', value: randomValue()},
                    {name: '福建', value: randomValue()},
                    {name: '贵州', value: randomValue()},
                    {name: '广东', value: randomValue()},
                    {name: '青海', value: randomValue()},
                    {name: '西藏', value: randomValue()},
                    {name: '四川', value: randomValue()},
                    {name: '宁夏', value: randomValue()},
                    {name: '海南', value: randomValue()},
                    {name: '台湾', value: randomValue()},
                    {name: '香港', value: randomValue()},
                    {name: '澳门', value: randomValue()}
                ]
            }*/
        ]
    };
    overlay.setOption(option);
    myChart.on("click",function(param){
        console.log(param.name);
        targetName=param.name;
        map.fire("click");
        map.once('click', onMapClick);
    });

}
function randomValue() {
    return Math.round(Math.random()*1000);
}

function onMapClick(e) {
    console.log(e);
    console.log(targetName);
    var showHTML="";
    var showIndex=0;
    for (var i = 0; i < data.length; i++) {
        var tempdata=data[i];
        if(tempdata.name===targetName){
            showHTML=tempdata.data||'说明该图适用范围,点击即可自定义添加进去想要表达的数据观点 ';
            showIndex=i;
        }
    }
    popup.setLatLng(e.latlng)
        .setContent('<div class="summernote">' +
            '<div class="showInfoWindow"' +
            'style="width: 100%;height: 100%;height: 120px;width: 200px;display: block;border: lightskyblue">' +
            showHTML +
            '</div> ' +
            '<textarea autofocus class="editInfoWindow"' +
            'style="width: 100%;height: 100%;height: 120px;width: 200px;display: none;border: lightskyblue;background-color: #FAFAD2"></textarea>' +
            '</div>')
        .openOn(map);
    $(".showInfoWindow").on("click", function (evt) {
        var that=evt.target;
        $(that).css("display", "none");
        $(that).next().css("display", "block");
    });
    $(".editInfoWindow").keydown(function(evt) {
        if(evt.keyCode===13&&!evt.shiftKey){
            var that=evt.target;
            var editNotesContent = $(that).val();
            editNotesContent=editNotesContent.replace(/\n/g,"<br />");
            editNotesContent=editNotesContent.replace(/\r/g,"<br />")
            $(that).prev().html(editNotesContent);
            $(that).prev().css("display", "block");
            //$(that).val("");
            $(that).css("display", "none");
            data[showIndex].data=editNotesContent;
        }
    })
}
