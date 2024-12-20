import ReactEcharts from 'echarts-for-react';
import React from 'react';
interface Props {
  name?: string;
  data: any[];
}
const LineChart: React.FC<Props> = (props): React.ReactElement => {
  const { name, data } = props;
  const option = {
    title: {
      //图表标题
      show: name ? true : false, //是否显示图表标题
      text: name, //图表标题
    },
    tooltip: {
      trigger: 'axis', //提示框触发类型
      axisPointer: {
        //提示框样式
        type: 'cross', //提示框类型
        label: {
          backgroundColor: '#6a7985', //提示框背景颜色
        },
      },
    },
    legend: {
      //图例
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      width: '100%', //图例宽度
      left: 'center', //图例位置
      bottom: '0', //图例底部位置
      itemWidth: 16, //图例标志宽度
      itemHeight: 10, //图例标志高度
      icon: 'stack', //图例标志
      type: 'scroll', //图例类型
      textStyle: {
        //图例文本样式
        fontSize: 12, //图例文本大小
        color: '#727480', //图例文本颜色
        lineHeight: 12, //图例文本行高
        fontWeight: 400, //图例文本字体粗细
        padding: [1, 0, 0, 0], //图例文本内边距
      },
    },
    // toolbox: { //工具栏样式
    //   feature: { //工具栏功能
    //     saveAsImage: {}, //保存为图片
    //   },
    // },
    grid: {
      //图表区域样式
      left: '3%', //图表区域左边距
      right: '4%', //图表区域右边距
      bottom: '8%', //图表区域下边距
      containLabel: true, //是否包含坐标轴的刻度标签或文本
    },
    xAxis: [
      {
        type: 'category', //x轴类型
        boundaryGap: false, //x轴是否紧贴边界
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], //x轴数据
        axisLabel: {
          //x轴标签样式
          color: '#A1A4B3',
          fontSize: 12,
        },
        axisLine: {
          //x轴线样式
          show: true, //是否显示x轴线
          lineStyle: {
            color: '#E1E4F0',
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value', //y轴类型
        name: '数量', //y轴名称
        nameLocation: 'end', //y轴名称位置
        nameTextStyle: {
          //y轴名称样式
          color: '#727480',
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 12,
        },
        axisLabel: {
          textStyle: {
            //y轴标签样式
            color: '#A1A4B3',
            fontSize: 12,
          },
        },
        axisLine: {
          //y轴线样式
          show: false,
        },
        axisTick: {
          //y轴刻度样式
          show: true,
        },
        splitLine: {
          //y轴分割线样式
          show: true,
          lineStyle: {
            type: 'dashed',
          },
        },
      },
    ],
    series: data,
  };

  return <ReactEcharts option={option} style={{ height: '100%' }} />;
};

export default LineChart;
