import { useState } from 'react';
import { CalendarPicker } from 'antd-mobile';
import PageContainer from '../components/pge-container';

const min = new Date();
min.setMonth(min.getMonth() - 6);
function Log() {
  const [open, setOpen] = useState(false);
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
      >
        请选择查询日期
      </p>
      <button style={{ display: '', width: 'auto' }} className='btn'>
        查询
      </button>

      <CalendarPicker
        selectionMode='range'
        visible={open}
        min={min}
        onConfirm={() => {
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
      <hr />
      <div className='all-list'>
        <div className='flex flex-col gap-2 shadow-md p-4'>
          <p>【支出】购物</p>
          <p className='font-bold'>￥12</p>
          <p className='text-gray-600'>备注：在网上买的无聊小玩意儿</p>
          <p className='text-gray-600'>2024-11-30</p>
        </div>
        <div className='flex flex-col gap-2 shadow-md p-4'>
          <p>【支出】购物</p>
          <p className='font-bold'>￥12</p>
          <p className='text-gray-600'>备注：在网上买的无聊小玩意儿</p>
          <p className='text-gray-600'>2024-11-30</p>
        </div>
        <div className='flex flex-col gap-2 shadow-md p-4'>
          <p>【支出】购物</p>
          <p className='font-bold'>￥12</p>
          <p className='text-gray-600'>备注：在网上买的无聊小玩意儿</p>
          <p className='text-gray-600'>2024-11-30</p>
        </div>
        <div className='flex flex-col gap-2 shadow-md p-4'>
          <p>【支出】购物</p>
          <p className='font-bold'>￥12</p>
          <p className='text-gray-600'>备注：在网上买的无聊小玩意儿</p>
          <p className='text-gray-600'>2024-11-30</p>
        </div>
        <div className='flex flex-col gap-2 shadow-md p-4'>
          <p>【支出】购物</p>
          <p className='font-bold'>￥12</p>
          <p className='text-gray-600'>备注：在网上买的无聊小玩意儿</p>
          <p className='text-gray-600'>2024-11-30</p>
        </div>
      </div>
    </PageContainer>
  );
}

export default Log;
