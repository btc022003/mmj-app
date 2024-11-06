import { fetch } from "@tauri-apps/plugin-http";
import { InfiniteScroll } from "antd-mobile";
import PageContainer from "../components/pge-container";
import { useEffect, useState } from "react";

type NewItem = {
  id: string;
  title: string;
  summary: string;
};

function Discover() {
  const [list, setList] = useState<NewItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  async function loadMore() {
    // const append = await mockRequest()
    // setData(val => [...val, ...append])
    // setHasMore(append.length > 0)
    setPage(page + 1);
  }
  useEffect(() => {
    fetch(
      `https://papi.jiemian.com/page/api/kuaixun/getlistmore?cid=1323kb&start_time=${Math.floor(
        Date.now() / 1000
      )}&page=${page}&tagid=1323`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        setList([...list, ...res.result.list]);
        setHasMore(res.result.list.length > 0);
      });
  }, [page]);
  return (
    <PageContainer>
      <h1 className="bg-gray-700 text-sm font-sans text-gray-200 indent-4 font-sans p-2">
        把一个远大的目标分割成一个一个可以实现的小计划，日复一日的向着每一个小计划前行。多和优秀的人在一起，远离负面情绪，积极阳光的迎接每一天
      </h1>
      <div className="news">
        {list.map((item) => (
          <div className="news-item" key={item.id}>
            <p className="title">{item.title}</p>
            <p className="desc">{item.summary}</p>
          </div>
        ))}
      </div>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </PageContainer>
  );
}

export default Discover;
