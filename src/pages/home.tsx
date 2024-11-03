import { useState } from 'react';
import { Modal, Form, Input, TextArea, Selector } from 'antd-mobile';
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
      <Modal
        title='记账'
        visible={open}
        showCloseButton={true}
        onClose={() => setOpen(false)}
        closeOnMaskClick={false}
        content={
          <Form>
            <Form.Item label='金额' name='money'>
              <Input placeholder='请输入金额' />
            </Form.Item>
            <Form.Item label='类型' name='info'>
              <Selector
                options={[
                  { label: '收入', value: 'in' },
                  { label: '支出', value: 'out' },
                ]}
                defaultValue={['out']}
                onChange={(arr, extend) => console.log(arr, extend.items)}
              />
            </Form.Item>
            <Form.Item label='分类' name='cate'>
              <Selector
                options={[
                  { label: '消费', value: 'xiaofei' },
                  { label: '餐饮', value: 'canyin' },
                  { label: '购物', value: 'gouwu' },
                  { label: '通信费', value: 'tongxinfei' },
                  { label: '其他', value: 'qita' },
                ]}
                defaultValue={['tongxinfei']}
                onChange={(arr, extend) => console.log(arr, extend.items)}
              />
            </Form.Item>
            <Form.Item label='备注' name='remarks'>
              <TextArea placeholder='请输入备注信息' />
            </Form.Item>
            <Form.Item>
              <button className='btn'>保存</button>
            </Form.Item>
          </Form>
        }
      ></Modal>
    </PageContainer>
  );
}

export default Home;
