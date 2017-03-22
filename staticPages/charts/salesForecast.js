var exports = this;
exports.DL = exports.DL || {};
exports.DL.Layout = exports.DL.Layout || {};
exports.DL.Layout.SalesForecast = (function() {
  function SalesForecast() {}
  SalesForecast.init = function() {
    // 绑定生成销售预测图事件
    this._bindingChart();
    // 绑定生成预测表格事件
    this._bindingTable();
    // 绑定生成日期事件
    this._bindingCalendar();
  };
  SalesForecast._bindingChart = function() {
		var salesChart = document.getElementById('salesChart');
    var myChart = echarts.init(salesChart);
    option = {
			title: {
				text: '图表'
			},
		  tooltip : {
	      trigger: 'axis'
		  },
		  legend: {
	      data:['预测业绩','实际业绩']
		  },
		  toolbox: {
	      show : true,
	      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true}
	      }
		  },
		  calculable : true,
		  xAxis : [
	      {
          type : 'category',
          boundaryGap : false,
          data : ['2016.1', '2016.2', '2016.3', '2016.4', '2016.5', '2016.6', '2016.7', '2016.8', '2016.9', '2016.10', '2016.11', '2016.12', '2017.1', '2017.2', '2017.3']
	      }
		  ],
		  yAxis : [
	      {
          type : 'value',
					min: 20,
					axisLabel : {
						formatter: '{value}.000'
					}
	      }
		  ],
		  series : [
	      {
          name: '预测业绩',
          type: 'line',
          data: [21.000, 23.529, 22.143, 24.234, 23.543, 25.400, 24.429, 25.643, 26.734, 24.943, 27.210, 25.232, 27.102, 25.893, 31.234]
	      },
        // 当需要虚线拼接时 可以用
        // {
        //   name:'销售总额',
        //   type:'line',
        //   lineStyle: {
				// 		normal: {
				// 			type: 'dotted'
				// 		}
				// 	},
        //   data: [, , , , , , , , , 21.034, 20.212, 20.232, 20.323, 20.345, 21.345]
	      // },
	      {
          name: '实际业绩',
          type: 'line',
          lineStyle: {
						normal: {
							type: 'dotted'
						}
					},
          data: [20.000, 21.529, 21.143, 21.234, 22.543, 22.400, 23.429, 23.643, 24.734, 24.943, 25.210, 26.232]
	      }
        // 当需要虚线拼接时 可以用
        // ,
				// {
				// 	lineStyle: {
				// 		normal: {
				// 			type: 'dotted'
				// 		}
				// 	},
				// 	name: '销售业绩',
        //   type: 'line',
        //   data: [, , , , , , , , , 24.943, 25.210, 26.232, 27.102, 27.893, 30.234]
	      // }
		  ]
		};
		// lineStyle
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  };
  SalesForecast._bindingTable = function() {
    $('#createTable').bootstrapTable({
      striped: true,
      search: true,
      strictSearch: true,
      searchAlign: 'left',
      buttonsAlign: 'left',
      searchOnEnterKey: true,
      showToggle: true,
      pagination: true,
      sidePagination: 'client',
      pageNumber: 1,
      pageSize: 2,
      pageList: [10, 20],
      columns: [{
        field: 'date',
        title: '日期'
      }, {
        field: 'sales',
        title: '销售预测'
      }, {
        field: 'user',
        title: '用户'
      }, {
        field: 'cycle',
        title: '预计周期'
      }, {
        field: 'total',
        title: '总金额'
        // 需要单独某个表格列增加样式可以写在这里^_^
        // ,cellStyle: function cellStyle(value, row, index) {
        //   return {
        //     css: {
        //       "background-color": "#419BF9"
        //     }
        //   }
        // },
      }],
      data: [{
        date: '2016.1',
        sales: '30.000',
        user: 'NPC-01',
        cycle: '12周',
        total: '32.034'
      }, {
        date: '2016.2',
        sales: '19.222',
        user: 'NPC-02',
        cycle: '6周',
        total: '20.432'
      }, {
        date: '2016.3',
        sales: '12.326',
        user: 'NPC-03',
        cycle: '6周',
        total: '12.436'
      }, {
        date: '2016.4',
        sales: '18.000',
        user: 'NPC-04',
        cycle: '3周',
        total: '18.340'
      }]
    });
  };
  SalesForecast._bindingCalendar = function() {
    $( "#datepicker" ).datepicker();
  };
  return SalesForecast;
})();
