import Database from "@tauri-apps/plugin-sql";
import dayjs from "dayjs";

export type TradeLog = {
  id: string;
  amount: number;
  remarks: string;
  cate: string;
  created_at: string;
};

export async function loadDB() {
  try {
    const db = await Database.load("sqlite:test.db");
    await db.execute(
      "create Table if not exists trade_logs(id TEXT PRIMARY KEY UNIQUE,amount DECIMAL, remarks TEXT, cate TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
    );
    return db;
  } catch (e) {
    // console.log(e);
    return null;
  }
}

/**
 * 执行查询的sql语句
 * @param sql
 * @returns
 */
async function executeSelectSql<T>(sql: string) {
  const db = await Database.load("sqlite:test.db");
  return db.select<Promise<T>>(sql);
}

// loadDB();

/**
 * 根据条件查询
 * @param startDate 开始时间
 * @param endDate   结束时间
 * @returns
 */
export async function queryTradeLogs(
  startDate: string,
  endDate: string
): Promise<TradeLog[]> {
  const SQL = `SELECT * from trade_logs WHERE created_at >= '${startDate}' and created_at<= '${endDate}' order by created_at desc`;
  return executeSelectSql(SQL);
}

/**
 * 根据开始结束时间获取区间内的统计数据的查询语句
 * @param startDate 开始世界
 * @param endDate   结束时间
 * @returns
 */
function getReportSql(startDate: string, endDate: string) {
  return `SELECT sum(amount) as sum_amount, cate from ( select * from trade_logs WHERE created_at >= '${startDate}' and created_at<= '${endDate}' ) GROUP BY cate`;
}

/**
 * 在报表页面使用
 * @returns
 */
export async function queryReportData() {
  const monthStart =
    dayjs().startOf("month").format("YYYY-MM-DD") + " 00:00:00";
  const monthEnd = dayjs().endOf("month").format("YYYY-MM-DD") + " 23:59:59";
  const yearStart = dayjs().startOf("year").format("YYYY-MM-DD") + " 00:00:00";
  const yearEnd = dayjs().endOf("year").format("YYYY-MM-DD") + " 23:59:59";
  const SQLMONTH = getReportSql(monthStart, monthEnd);
  const SQLYEAR = getReportSql(yearStart, yearEnd);
  // 查询月度数据
  const monthData: { sum_amount: number; cate: string }[] =
    await executeSelectSql(SQLMONTH);

  // 查询年度数据
  const yearData: { sum_amount: number; cate: string }[] =
    await executeSelectSql(SQLYEAR);

  return {
    monthData,
    yearData,
  };
}

/**
 * 首页的数据
 * @returns
 */
export async function queryHomePageData() {
  const monthStart =
    dayjs().startOf("month").format("YYYY-MM-DD") + " 00:00:00";
  const monthEnd = dayjs().endOf("month").format("YYYY-MM-DD") + " 23:59:59";
  const SQLMONTH = getReportSql(monthStart, monthEnd);
  // 查询月度数据
  const resMonthData: Promise<{ sum_amount: number; cate: string }[]> =
    executeSelectSql(SQLMONTH);
  const todayListData = await queryTradeLogs(
    dayjs().format("YYYY-MM-DD") + " 00:00:00",
    dayjs().format("YYYY-MM-DD") + " 23:59:59"
  );

  return {
    resMonthData,
    todayListData,
  };
}

/**
 * 添加记账记录
 * @param amount  金额
 * @param remarks 备注
 * @param cate    分类值
 * @returns
 */
export async function addTradeLog(
  amount: number,
  remarks: string,
  cate: string
) {
  const db = await Database.load("sqlite:test.db");
  const SQL = `INSERT INTO trade_logs(id, amount,remarks,cate) VALUES('${crypto.randomUUID()}',${amount},'${remarks}','${cate}')`;
  // console.log(SQL);
  return db
    .execute(SQL)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
