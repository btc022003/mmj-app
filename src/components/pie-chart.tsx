import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function PieChart({ data }: any) {
  const tagContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(data);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(tagContainer.current);
    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          // name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          // data: [
          //   { value: 1048, name: "餐饮" },
          //   { value: 735, name: "出行" },
          //   { value: 580, name: "人情" },
          //   { value: 484, name: "网购" },
          //   { value: 300, name: "其他" },
          // ],
          data,
        },
      ],
    };
    // 绘制图表
    myChart.setOption(option);
  }, [data]);
  return <div className="w-80 h-80 mx-auto" ref={tagContainer}></div>;
}

export default PieChart;
