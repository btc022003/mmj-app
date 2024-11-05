import { useEffect, useState } from "react";
import PageContainer from "../components/pge-container";
import PieChart from "../components/pie-chart";
import { queryReportData } from "../utils/db";
import { TRADE_TYPE } from "../utils/tools";
function Report() {
  const [selIndex, setSelIndex] = useState("in"); // in/out
  const [reportData, setReportData] = useState<{
    yearIncome?: [];
    monthExpend?: [];
    yearExpend?: [];
    monthIncome?: [];
  }>({});
  useEffect(() => {
    queryReportData().then((res) => {
      const monthIncome: any = []; // 月入
      const monthExpend: any = []; // 月出
      const yearIncome: any = []; // 年入
      const yearExpend: any = []; // 年出
      res.monthData
        .filter((item) => item.cate.includes("_income"))
        .forEach((item) => {
          monthIncome.push({
            name: TRADE_TYPE.find((a) => a.value == item.cate)?.name,
            value: item.sum_amount,
          });
          // monthIncome[TRADE_TYPE.find((a) => a.value == item.cate)?.name!] =
          //   item.sum_amount;
        });
      res.yearData
        .filter((item) => item.cate.includes("_income"))
        .forEach((item) => {
          yearIncome.push({
            name: TRADE_TYPE.find((a) => a.value == item.cate)?.name,
            value: item.sum_amount,
          });
          // yearIncome[TRADE_TYPE.find((a) => a.value == item.cate)?.name!] =
          //   item.sum_amount;
        });

      res.monthData
        .filter((item) => item.cate.includes("_expend"))
        .forEach((item) => {
          monthExpend.push({
            name: TRADE_TYPE.find((a) => a.value == item.cate)?.name,
            value: item.sum_amount,
          });
          // monthExpend[TRADE_TYPE.find((a) => a.value == item.cate)?.name!] =
          //   item.sum_amount;
        });
      res.yearData
        .filter((item) => item.cate.includes("_expend"))
        .forEach((item) => {
          yearExpend.push({
            name: TRADE_TYPE.find((a) => a.value == item.cate)?.name,
            value: item.sum_amount,
          });
          // yearExpend[TRADE_TYPE.find((a) => a.value == item.cate)?.name!] =
          //   item.sum_amount;
        });
      setReportData({ monthIncome, monthExpend, yearIncome, yearExpend });
    });
  }, []);
  return (
    <PageContainer>
      <div className="tabs-nav text-center">
        <span
          onClick={() => {
            setSelIndex("in");
          }}
          className={selIndex === "in" ? "" : "text-gray-500"}
        >
          收入
        </span>
        |
        <span
          className={selIndex === "out" ? "" : "text-gray-500"}
          onClick={() => {
            setSelIndex("out");
          }}
        >
          支出
        </span>
      </div>
      <div
        className="tabs-content"
        style={{ display: selIndex === "in" ? "block" : "none" }}
      >
        <div className="this-month">
          <p className="tips w-20">本月收入</p>
          <PieChart data={reportData.monthIncome} />
        </div>
        <div className="this-year">
          <p className="tips w-20">本年收入</p>
          <PieChart data={reportData.yearIncome} />
        </div>
      </div>
      <div
        className="tabs-content"
        style={{ display: selIndex === "out" ? "block" : "none" }}
      >
        <div className="this-month">
          <p className="tips w-20">本月支出</p>
          <PieChart data={reportData.monthExpend} />
        </div>
        <div className="this-year">
          <p className="tips w-20">本年支出</p>
          <PieChart data={reportData.yearExpend} />
        </div>
      </div>
    </PageContainer>
  );
}
export default Report;
