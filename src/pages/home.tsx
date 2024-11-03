import { useState } from 'react';
import PageContainer from '../components/pge-container';
function Home() {
  const [open, setOpen] = useState(false);
  return (
    <PageContainer>
      <div className='content'></div>
      <h1 className='text-2xl font-sans'>每美记账</h1>
      <p className='text-xl text-gray-600 font-mono'>记录美好生活每一天</p>
      <div className='flex items-center justify-around mt-2'>
        <div className='p-8 bg-black text-white shadow-md shadow-gray-500'>
          <h2>本月收入</h2>
          <p className='text-sm font-bold font-sans'>￥10000</p>
        </div>
        <div className='p-8 border border-black shadow-md shadow-gray-500'>
          <h2>本月支出</h2>
          <p className='text-sm font-bold font-sans'>￥100</p>
        </div>
      </div>
      <button
        className='btn my-8'
        onClick={() => {
          setOpen(true);
        }}
      >
        一键记账
      </button>
      <span className='tips bg-black text-white py-2 px-4 shadow-md shadow-gray-500'>
        今日收支
      </span>
      <div className='today-logs'>
        <div className='today-item shadow-md p-4'>
          <p>【支出】餐饮</p>
          <p className='font-bold'>￥15</p>
          <p className='text-gray-600'>
            备注：买早饭花费了15块，吃的包子，虽然有点贵但是很好吃
          </p>
        </div>
        <div className='today-item shadow-md p-4'>
          <p>【支出】购物</p>
          <p className='font-bold'>￥12</p>
          <p className='text-gray-600'>备注：在网上买的无聊小玩意儿</p>
        </div>
        <div className='today-item shadow-md p-4'>
          <p>
            <span className='bg-black text-white'>【收入】</span>红包
          </p>
          <p className='font-bold'>￥20</p>
          <p className='text-gray-600'>备注：群里抢红包，赚了！！！好开心</p>
        </div>
        <div className='today-item shadow-md p-4'>
          <p>【支出】购物</p>
          <p className='font-bold'>￥12</p>
          <p className='text-gray-600'>备注：在网上买的无聊小玩意儿</p>
        </div>
        <div className='today-item shadow-md p-4'>
          <p>【支出】餐饮</p>
          <p className='font-bold'>￥30</p>
          <p className='text-gray-600'>
            备注：午饭不知道吃什么，点了外卖。真贵，下次一定不点了
          </p>
        </div>
      </div>

      {/* ModalForm */}
    </PageContainer>
  );
}

export default Home;
