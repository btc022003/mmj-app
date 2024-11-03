import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function PieChart() {
  const tagContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(tagContainer.current);
    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: '餐饮' },
            { value: 735, name: '出行' },
            { value: 580, name: '人情' },
            { value: 484, name: '网购' },
            { value: 300, name: '其他' },
          ],
        },
      ],
    };
    // 绘制图表
    myChart.setOption(option);
  }, []);
  return <div className='w-80 h-80' ref={tagContainer}></div>;
}

export default PieChart;
