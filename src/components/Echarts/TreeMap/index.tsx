import ReactEcharts from 'echarts-for-react';
import React from 'react';
interface Props {
  data?: any[];
}
const TreeMap: React.FC<Props> = (): React.ReactElement => {
  // const { data } = props;
  const option = {
    title: {
      show: false,
    },
    tooltip: {
      trigger: 'item', //提示框触发类型
    },
    legend: {
      show: false, //是否显示图例
    },
    series: [
      {
        type: 'treemap', //系列类型
        layout: 'treemap',
        visualDimension: 1, // 按照数值大小排序（value 在数组中是第二个维度）
        visualMin: 0,
        visualMax: 100,
        leafDepth: 1, // 控制层级
        drillDownIcon: '', // 去除下钻标记
        squareRatio: 0.1, // 黄金分割比
        label: {
          //标签
          show: false, //是否显示标签
        },
        labelLine: {
          //引导线
          show: false, //是否显示引导线
        },
        roam: false,
        breadcrumb: { show: false },
        nodeClick: false,
        // dimensions: ['name','value'],
        encode: {
          name: 0,
          value: 1,
        },
        data: [
          // ['A',50],
          // ['B',70],
          { name: 'A', value: 50 },
          { name: 'B', value: 40 },
          { name: 'C', value: 30 },
          { name: 'D', value: 20 },
          { name: 'E', value: 10 },
        ],
      },
    ],
  };
  return <ReactEcharts option={option} style={{ height: '500px' }} />;
};
export default TreeMap;
