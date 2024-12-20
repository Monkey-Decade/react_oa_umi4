import ReactEcharts from 'echarts-for-react';
import React from 'react';
interface Props {
  data?: any[];
}
const NightingaleChart: React.FC<Props> = (): React.ReactElement => {
  // const { data } = props;
  const option = {
    // backgroundColor: '#2c343c',

    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc',
      },
    },

    tooltip: {
      trigger: 'item',
      // show: false
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        // name: 'Access From',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 274, name: 'Union Ads' },
          { value: 235, name: 'Video Ads' },
          { value: 400, name: 'Search Engine' },
        ],
        // .sort(function (a, b) {
        //   return a.value - b.value;
        // }),
        roseType: 'radius',
        label: {
          show: false,
          // color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          // show: false,
          // lineStyle: {
          //   color: 'rgba(255, 255, 255, 0.3)'
          // },
          // smooth: 0.2,
          // length: 10,
          // length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },

        // animationType: 'scale',
        // animationEasing: 'elasticOut',
        // animationDelay: function () {
        //   return Math.random() * 200;
        // }
      },
    ],
  };
  return <ReactEcharts option={option} style={{ height: '100%' }} />;
};
export default NightingaleChart;
