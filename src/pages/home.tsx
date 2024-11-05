import { useEffect, useState } from "react";
import { Modal, Form, Input, TextArea, Selector, Toast } from "antd-mobile";
import { addTradeLog, queryHomePageData } from "../utils/db";
import PageContainer from "../components/pge-container";
import { TRADE_TYPE } from "../utils/tools";
function Home() {
  const [open, setOpen] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expendTotal, setExpendTotal] = useState(0);
  const [todaylist, setTodayList] = useState<
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
    if (!open)
      queryHomePageData().then((data) => {
        // console.log(data);
        data.resMonthData.then((res) => {
          const sumIncome = res
            .filter((item) => item.cate.includes("_income"))
            .reduce((pre, cur) => pre + cur.sum_amount * 1, 0);

          const sumExpend = res
            .filter((item) => item.cate.includes("_expend"))
            .reduce((pre, cur) => pre + cur.sum_amount * 1, 0);

          setExpendTotal(sumExpend);
          setIncomeTotal(sumIncome);
        });

        setTodayList(
          data.todayListData.map((item) => {
            return {
              ...item,
              showCate:
                (item.cate.includes("_income") ? "【收入】" : "【支出】") +
                TRADE_TYPE.find((a) => a.value == item.cate)?.name,
            };
          })
        );
      });
  }, [open]);
  return (
    <PageContainer>
      <div className="content"></div>
      <h1 className="text-2xl font-sans">每美记账</h1>
      <p className="text-xl text-gray-600 font-mono">记录美好生活每一天</p>
      <div className="flex items-center justify-around mt-2">
        <div className="p-8 bg-black text-white shadow-md shadow-gray-500 w-2/5">
          <h2>本月收入</h2>
          <p className="text-sm font-bold font-sans">
            ￥{incomeTotal.toFixed(2)}
          </p>
        </div>
        <div className="p-8 border border-black shadow-md shadow-gray-500 w-2/5">
          <h2>本月支出</h2>
          <p className="text-sm font-bold font-sans">
            ￥{expendTotal.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="btn my-8"
        onClick={() => {
          setOpen(true);
        }}
      >
        一键记账
      </button>
      <span className="tips bg-black text-white py-2 px-4 shadow-md shadow-gray-500">
        今日收支
      </span>
      <div className="today-logs">
        {todaylist.map((item) => (
          <div className="today-item shadow-md p-4" key={item.id}>
            <p>{item.showCate}</p>
            <p className="font-bold">￥{item.amount.toFixed(2)}</p>
            <p className="text-gray-600">备注：{item.remarks}</p>
          </div>
        ))}
      </div>

      {/* ModalForm */}
      <Modal
        title="记账"
        visible={open}
        showCloseButton={true}
        onClose={() => setOpen(false)}
        closeOnMaskClick={false}
        destroyOnClose={true}
        content={
          <Form
            onFinish={async (v) => {
              console.log(v);
              if (v.cate && v.amount && v.remarks) {
                await addTradeLog(v.amount, v.remarks, v.cate[0]);
                setOpen(false);
              } else {
                Toast.show({
                  content: "请输入账单信息",
                });
              }
            }}
            style={{ width: "90%" }}
          >
            <Form.Item label="金额" name="amount">
              <Input placeholder="请输入金额" type="number" />
            </Form.Item>
            <Form.Item label="分类" name="cate">
              <Selector
                // options={[
                //   { label: "消费", value: "xiaofei", description: "" },
                //   { label: "餐饮", value: "canyin" },
                //   { label: "购物", value: "gouwu" },
                //   { label: "通信费", value: "tongxinfei" },
                //   { label: "其他", value: "qita" },
                // ]}
                options={[
                  ...TRADE_TYPE.filter((item) =>
                    item.value.includes("_income")
                  ).map((item) => ({
                    label: item.name,
                    value: item.value,
                    description: "收入",
                  })),
                  ...TRADE_TYPE.filter((item) =>
                    item.value.includes("_expend")
                  ).map((item) => ({
                    label: item.name,
                    value: item.value,
                    description: "支出",
                  })),
                ]}
                defaultValue={["canyin_expend"]}
                onChange={(arr, extend) => console.log(arr, extend.items)}
              />
            </Form.Item>
            <Form.Item label="备注" name="remarks">
              <TextArea placeholder="请输入备注信息" />
            </Form.Item>
            <Form.Item>
              <button className="btn" type="submit">
                保存
              </button>
            </Form.Item>
          </Form>
        }
      ></Modal>
    </PageContainer>
  );
}

export default Home;
