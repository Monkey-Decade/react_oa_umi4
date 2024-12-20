import ReactECharts from 'echarts-for-react';
import React from 'react';
interface Props {
  data: any[];
}
const Heatmap: React.FC<Props> = (props): React.ReactElement => {
  const { data } = props;
  const getOption = () => {
    const matrixData = data.map((item) => [
      item.xIndex,
      item.yIndex,
      item.value,
    ]);

    return {
      title: {
        text: '股票板块矩阵图',
      },
      tooltip: {
        position: 'top',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: [...new Set(data.map((item) => item.x))], // X轴类别
        splitLine: { show: false },
      },
      yAxis: {
        type: 'category',
        data: [...new Set(data.map((item) => item.y))], // Y轴类别
        splitLine: { show: false },
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        top: 'top',
        color: ['#d94e5d', '#eac736', '#50a3ba'],
      },
      series: [
        {
          name: '矩阵图',
          type: 'heatmap',
          data: matrixData,
          label: {
            show: true,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  };

  return (
    <ReactECharts
      option={getOption()}
      style={{ height: '400px', width: '100%' }}
    />
  );
};

export default Heatmap;
