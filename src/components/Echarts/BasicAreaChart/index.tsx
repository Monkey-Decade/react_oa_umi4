import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React from 'react';
interface Props {
  name?: string;
  data?: any[];
  color: string;
}
const BasicAreaChart: React.FC<Props> = (props): React.ReactElement => {
  const { color, data } = props;
  const option = {
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        data: data,
        type: 'line',
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color:
            color === '0'
              ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(0, 221, 255)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(77, 119, 255)',
                  },
                ])
              : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(128, 255, 165)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(1, 191, 236)',
                  },
                ]),
        },
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} />
  );
};

export default React.memo(BasicAreaChart);
