$(document).ready(
    function()
    {
         // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '产品销量图例'
            },
            tooltip: {},
            color:['#ffcccc'],
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        
     $("#customColor").jPicker(  
        {  
          window:  
          {  
              position:  
              {  
                x: 'screenCenter', /* acceptable values "left", "center", "right", "screenCenter", or relative px value */  
                y: 'bottom' /* acceptable values "top", "bottom", "center", or relative px value */  
              },  
            expandable: true  
          },
         color:
          {
            active: new $.jPicker.Color({ ahex: 'ffcccc00' })
          },
          images:  
          {  
    //            clientPath: '${ctx}/commons/jpicker-1.1.6/images/', /* Path to image files */
            clientPath: 'app/customChart/images/',
          },  
          localization: /* alter these to change the text presented by the picker (e.g. different language) */  
          {  
            text:  
            {  
              title: '拖动鼠标选中一个颜色',  
              newColor: '选中颜色',  
              currentColor: '当前颜色',  
              ok: '确定',  
              cancel: '取消'  
            },  
            tooltips:  
            {  
              colors:  
              {  
                newColor: '点击‘确定’提交新选颜色',  
                currentColor: '点击这里还原当前颜色'  
              },  
              buttons:  
              {  
                ok: '提交选中的颜色',  
                cancel: '取消并恢复当前颜色'  
              }  
            }  
          }  

        },
         
         function(color,context){
             var all = color.val('all');
             console.log(all);
             console.log(option.color);
             option.color = ["#"+all.hex.toString()];
             console.log(option.color);
             myChart.setOption(option);
         }
     );
        $('#typeSelector').change(function(){ 
            var selectedType =$(this).children('option:selected').val();
            console.log(selectedType);
            option.series[0].type = selectedType;
            console.log(option.series[0].type);
            myChart.setOption(option);
            console.log(option);
        }) 
});