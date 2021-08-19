import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const Chart = ({ countryData }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let formattedData = [];
    let year = 0;
    let value = 0;
    countryData.forEach((elem) => {
      year = parseInt(elem.date);
      value = parseInt(elem.value);
      formattedData.push({ year, value });
    });
    setChartData(formattedData.reverse());
    console.log(formattedData);
  }, [countryData]);

  const formatYTick = (value) => {
    if (value > 1000000) {
      return `${(value / 1000000).toFixed(1)}m`;
    }
  };

  return (
    <ResponsiveContainer width='100%' height={400}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id='chart-fill' x1='0' y1='0' x='0' y2='1'>
            <stop offset='0%' stopColor='#0b1f73' stopOpacity={0.4}></stop>
            <stop offset='75%' stopColor='#0b1f73' stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <Area dataKey='value' />
        <XAxis dataKey='year' domain={['auto', 'auto']} />
        <YAxis
          dataKey='value'
          tickCount={8}
          domain={['auto', 'auto']}
          tickFormatter={(value) => formatYTick(value)}
        />
        <CartesianGrid opacity={0.05} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;

const ChartContainer = styled.div``;
