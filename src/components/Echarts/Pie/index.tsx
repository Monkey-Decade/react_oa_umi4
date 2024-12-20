import ReactEcharts from 'echarts-for-react';
import React from 'react';
interface Props {
  data?: any[];
}
const PieChart: React.FC<Props> = (props): React.ReactElement => {
  const { data } = props;
  const option = {
    title: {
      show: false,
      // text: '数据规模', //主标题
      // subtext: 'Fake Data', //副标题
      // left: 'center' //标题位置
    },
    tooltip: {
      trigger: 'item', //提示框触发类型
    },
    legend: {
      show: false, //是否显示图例
      // orient: 'horizontal', //图例方向
      // bottom: '0', //图例位置
      // x: 'center', //图例位置
      // itemWidth: 16, //图例标志宽度
      // itemHeight: 10, //图例标志高度
      // icon: 'stack', //图例标志
      // type: 'scroll', //图例类型
      // textStyle: { //图例文本样式
      //   fontSize: 12, //图例文本大小
      //   color: '#727480', //图例文本颜色
      //   lineHeight: 12, //图例文本行高
      //   fontWeight: 400, //图例文本字体粗细
      //   padding: [1, 0, 0, 0], //图例文本内边距
      // },
    },
    series: [
      {
        // name: 'Access From', //系列名称
        type: 'pie', //系列类型
        radius: '80%', //饼图半径
        center: ['50%', '50%'], //饼图位置
        label: {
          //标签
          show: false, //是否显示标签
        },
        labelLine: {
          //引导线
          show: false, //是否显示引导线
        },
        data: data?.map((item, index) => ({
          ...item,
          selected: index === 0,
        })),
        emphasis: {
          //高亮样式
          itemStyle: {
            //高亮样式
            shadowBlur: 10, //阴影模糊度
            shadowOffsetX: 0, //阴影水平偏移
            shadowColor: 'rgba(0, 0, 0, 0.5)', //阴影颜色
          },
        },
      },
    ],
  };
  return <ReactEcharts option={option} style={{ height: '100%' }} />;
};
export default PieChart;
