import { DatePicker, Form } from 'antd-mobile';
import PageContainer from '../components/pge-container';
function Log() {
  return (
    <PageContainer>
      {/* <p>
        开始时间：2024-11-01 至 2024-11-30<button className='btn'>查询</button>
      </p> */}
      <Form>
        <Form.Item>
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <button style={{ display: '', width: 'auto' }} className='btn'>
            查询
          </button>
        </Form.Item>
      </Form>

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
