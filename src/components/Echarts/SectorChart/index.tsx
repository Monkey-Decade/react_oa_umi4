import ReactECharts from 'echarts-for-react';
import React from 'react';
interface Props {
  data: any[];
}
const StockKLineChart: React.FC<Props> = (props): React.ReactElement => {
  const { data } = props;
  const getOption = () => {
    return {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category', //
        data: data.map((item) => item.date),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'K线图',
          type: 'candlestick',
          data: data.map((item) => [
            item.open,
            item.close,
            item.low,
            item.high,
          ]),
          itemStyle: {
            color: '#FF0000', // 上涨为红色
            color0: '#00FF00', // 下跌为绿色
            borderColor: '#FF0000',
            borderColor0: '#00FF00',
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

export default StockKLineChart;
