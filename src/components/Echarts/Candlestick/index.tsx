import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React from 'react';
type EChartsOption = echarts.EChartsOption;
interface Props {
  data?: any;
}

const Candlestick: React.FC<Props> = (): React.ReactElement => {
  function getSign(
    data: any,
    dataIndex: any,
    openVal: any,
    closeVal: any,
    closeDimIdx: any,
  ) {
    let sign;
    if (openVal > closeVal) {
      sign = -1;
    } else if (openVal < closeVal) {
      sign = 1;
    } else {
      sign =
        dataIndex > 0
          ? // If close === open, compare with close of last record
            data[dataIndex - 1][closeDimIdx] <= closeVal
            ? 1
            : -1
          : // No record of previous, set to be positive
            1;
    }
    return sign;
  }
  function generateOHLC(count: number) {
    let data: any[] = [];
    let xValue = +new Date(2011, 0, 1);
    let minute = 60 * 1000;
    let baseValue = Math.random() * 12000;
    let boxVals = new Array(4);
    let dayRange = 12;
    for (let i = 0; i < count; i++) {
      baseValue = baseValue + Math.random() * 20 - 10;
      for (let j = 0; j < 4; j++) {
        boxVals[j] = (Math.random() - 0.5) * dayRange + baseValue;
      }
      boxVals.sort();
      let openIdx = Math.round(Math.random() * 3);
      let closeIdx = Math.round(Math.random() * 2);
      if (closeIdx === openIdx) {
        closeIdx++;
      }
      let volumn = boxVals[3] * (1000 + Math.random() * 500);
      // ['open', 'close', 'lowest', 'highest', 'volumn']
      // [1, 4, 3, 2]
      data[i] = [
        echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', (xValue += minute)),
        +boxVals[openIdx].toFixed(2),
        +boxVals[3].toFixed(2),
        +boxVals[0].toFixed(2),
        +boxVals[closeIdx].toFixed(2),
        +volumn.toFixed(0),
        getSign(data, i, +boxVals[openIdx], +boxVals[closeIdx], 4), // sign
      ];
    }
    return data;
  }
  const upColor = '#ec0000';
  const upBorderColor = '#8A0000';
  const downColor = '#00da3c';
  const downBorderColor = '#008F28';
  const dataCount = 100;
  const data = generateOHLC(dataCount);
  console.log(data);
  const option: EChartsOption = {
    dataset: {
      source: data,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      textStyle: {
        color: '#000',
      },
      formatter: function (params: any) {
        console.log(params);
        const data = params[0].data; // 获取当前点的数据
        // Open（开盘价）：在特定时间段内的第一个交易价格。
        // Highest（最高价）：在该时间段内的最高交易价格。
        // Lowest（最低价）：在该时间段内的最低交易价格。
        // Close（收盘价）：在特定时间段内的最后一个交易价格。
        return `
            <div>
                <strong>日期: ${params[0].name}</strong><br/>
                ${params[0].marker}开盘价(Open): ${data[1]}<br/>
                ${params[0].marker}最高价(Highest): ${data[2]}<br/>
                ${params[0].marker}最低价(Lowest): ${data[3]}<br/>
                ${params[0].marker}收盘价(Close): ${data[4]}<br/>
                ${params[0].marker}成交量(Volume): ${data[5]}
            </div>
        `;
      },
    },
    axisPointer: {
      link: [
        {
          xAxisIndex: 'all',
        },
      ],
      label: {
        backgroundColor: '#777',
      },
    },
    grid: [
      {
        left: '10%',
        right: '8%',
        height: '50%',
      },
      {
        left: '10%',
        right: '8%',
        top: '70%',
        height: '16%',
      },
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        // inverse: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: 'dataMin',
        max: 'dataMax',
      },
      {
        type: 'category',
        gridIndex: 1,
        boundaryGap: false,
        axisLine: { onZero: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        min: 'dataMin',
        max: 'dataMax',
      },
    ],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true,
        },
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
      },
    ],
    dataZoom: [
      {
        type: 'inside',
        xAxisIndex: [0, 1],
        start: 10,
        end: 100,
      },
      // {
      //   show: true,
      //   xAxisIndex: [0, 1],
      //   type: 'slider',
      //   bottom: 10,
      //   start: 10,
      //   end: 100
      // }
    ],
    visualMap: {
      show: false,
      seriesIndex: 1,
      dimension: 6,
      pieces: [
        {
          value: 1,
          color: upColor,
        },
        {
          value: -1,
          color: downColor,
        },
      ],
    },
    series: [
      {
        type: 'candlestick',
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor,
        },
        encode: {
          x: 0,
          y: [1, 4, 3, 2],
        },
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        large: true,
        encode: {
          x: 0,
          y: 5,
        },
      },
    ],
  };
  return <ReactEcharts option={option} style={{ height: '500px' }} />;
};
export default Candlestick;
