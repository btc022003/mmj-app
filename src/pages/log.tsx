import { useEffect, useState } from "react";
import { CalendarPicker } from "antd-mobile";
import dayjs from "dayjs";
import PageContainer from "../components/pge-container";
import { queryTradeLogs } from "../utils/db";
import { TRADE_TYPE } from "../utils/tools";

const min = new Date();
min.setMonth(min.getMonth() - 6);
function Log() {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(
    dayjs().startOf("month").format("YYYY-MM-DD")
  );
  const [loglist, setLogList] = useState<
    {
      showCate: string;
      id: string;
      amount: number;
      remarks: string;
      cate: string;
      created_at: string;
    }[]
  >([]);
  useEffect(() => {
    queryTradeLogs(startDate + " 00:00:00", endDate + " 23:59:59").then(
      (res) => {
        setLogList(
          res.map((item) => {
            return {
              ...item,
              showCate:
                (item.cate.includes("_income") ? "【收入】" : "【支出】") +
                TRADE_TYPE.find((a) => a.value == item.cate)?.name,
            };
          })
        );
      }
    );
  }, []);
  const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
  return (
    <PageContainer>
      {/* <p>
        开始时间：2024-11-01 至 2024-11-30<button className='btn'>查询</button>
      </p> */}
      {/* <Form>
        <Form.Item>
          <DatePicker />
        </Form.Item>
        <Form.Item>

        </Form.Item>
      </Form> */}
      <p
        onClick={() => {
          setOpen(true);
        }}
        className=" text-xl font-bold text-center"
      >
        查询日期: {startDate}至{endDate}
      </p>
      <button
        style={{ display: "", width: "auto" }}
        className="btn"
        onClick={() => {
          queryTradeLogs(startDate + " 00:00:00", endDate + " 23:59:59").then(
            (res) => {
              setLogList(
                res.map((item) => {
                  return {
                    ...item,
                    showCate:
                      (item.cate.includes("_income")
                        ? "【收入】"
                        : "【支出】") +
                      TRADE_TYPE.find((a) => a.value == item.cate)?.name,
                  };
                })
              );
            }
          );
        }}
      >
        查询
      </button>

      <CalendarPicker
        selectionMode="range"
        visible={open}
        min={min}
        onConfirm={(val) => {
          if (val) {
            setStartDate(dayjs(val[0]).format("YYYY-MM-DD"));
            setEndDate(dayjs(val[1]).format("YYYY-MM-DD"));
            // console.log(val);
            setOpen(false);
          } else {
          }
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
      <hr />
      <div className="all-list">
        {loglist.map((item) => (
          <div className="flex flex-col gap-2 shadow-md p-4" key={item.id}>
            <p>{item.showCate}</p>
            <p className="font-bold">￥{item.amount.toFixed(2)}</p>
            <p className="text-gray-600">备注：{item.remarks}</p>
            <p className="text-gray-600">
              {dayjs(item.created_at).format("YYYY-MM-DD")}
            </p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default Log;
