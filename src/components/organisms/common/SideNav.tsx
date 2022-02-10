import { sideNavItems } from 'data/common/sideNavItems';
import React from 'react';
import SideNavItem from 'src/components/atoms/common/SideNavItem';

const SideNav: React.FC = () => {
  return (
    <aside className="min-w-[100px] bg-white py-[40px] px-[36px]">
      <nav className="flex flex-col gap-6">
        {sideNavItems.map((sideNavItem) => (
          <SideNavItem key={sideNavItem.id} sideNavItem={sideNavItem} />
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
