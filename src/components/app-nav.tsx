import { NavLink, useLocation } from 'react-router-dom';
import IconHome from '../assets/home-b.png';
import IconHomeSel from '../assets/home-f.png';
import IconReport from '../assets/report-b.png';
import IconReportSel from '../assets/report-f.png';
import IconDiscover from '../assets/discover-b.png';
import IconDiscoverSel from '../assets/discover-f.png';
import IconLogs from '../assets/logs-b.png';
import IconLogsSel from '../assets/logs-f.png';

type NavLinkItemProps = {
  pathName: string;
  href: string;
  label: string;
  icon: string;
  selIcon: string;
};
function NavLinkItem({
  pathName,
  href,
  label,
  icon,
  selIcon,
}: NavLinkItemProps) {
  return (
    <NavLink to={href} className='w-full p-1'>
      <div className='flex flex-col items-center justify-center gap-1'>
        <img
          src={pathName == href ? selIcon : icon}
          alt=''
          className='w-5 h-5'
        />
        <span className='text-center text-sm'>{label}</span>
      </div>
    </NavLink>
  );
}

function AppNav() {
  const { pathname } = useLocation();

  return (
    <div className='my-nav flex items-center justify-around'>
      <NavLinkItem
        href='/'
        pathName={pathname}
        label='首页'
        icon={IconHome}
        selIcon={IconHomeSel}
      />
      <NavLinkItem
        href='/report'
        pathName={pathname}
        label='报表'
        icon={IconReport}
        selIcon={IconReportSel}
      />
      <NavLinkItem
        href='/discover'
        pathName={pathname}
        label='发现'
        icon={IconDiscover}
        selIcon={IconDiscoverSel}
      />
      <NavLinkItem
        href='/logs'
        pathName={pathname}
        label='日志'
        icon={IconLogs}
        selIcon={IconLogsSel}
      />
    </div>
  );
}

export default AppNav;
