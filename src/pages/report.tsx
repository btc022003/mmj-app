import { useState } from 'react';
import PageContainer from '../components/pge-container';
import PieChart from '../components/pie-chart';
function Report() {
  const [selIndex, setSelIndex] = useState('in'); // in/out
  return (
    <PageContainer>
      <div className='tabs-nav text-center'>
        <span
          onClick={() => {
            setSelIndex('in');
          }}
          className={selIndex === 'in' ? '' : 'text-gray-500'}
        >
          收入
        </span>
        |
        <span
          className={selIndex === 'out' ? '' : 'text-gray-500'}
          onClick={() => {
            setSelIndex('out');
          }}
        >
          支出
        </span>
      </div>
      <div
        className='tabs-content'
        style={{ display: selIndex === 'in' ? 'block' : 'none' }}
      >
        <div className='this-month'>
          <p className='tips w-20'>本月收入</p>
          <PieChart />
        </div>
        <div className='this-year'>
          <p className='tips w-20'>本年收入</p>
          <PieChart />
        </div>
      </div>
      <div
        className='tabs-content'
        style={{ display: selIndex === 'out' ? 'block' : 'none' }}
      >
        <div className='this-month'>
          <p className='tips w-20'>本月支出</p>
          <PieChart />
        </div>
        <div className='this-year'>
          <p className='tips w-20'>本月支出</p>
          <PieChart />
        </div>
      </div>
    </PageContainer>
  );
}
export default Report;
