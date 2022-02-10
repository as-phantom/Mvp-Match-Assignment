import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ISideNavItem } from 'src/interfaces/sideNavItem.interface';

interface Props {
  sideNavItem: ISideNavItem;
}

const SideNavItem: React.FC<Props> = ({ sideNavItem }) => {
  return (
    <Link href={sideNavItem.href}>
      <a>
        <Image src={sideNavItem.icon} alt={sideNavItem.alt} priority />
      </a>
    </Link>
  );
};

export default SideNavItem;
