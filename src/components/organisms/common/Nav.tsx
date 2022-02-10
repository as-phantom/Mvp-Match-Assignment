import Image from 'next/image';
import MenuSVG from 'public/svg/menu.svg';
import React from 'react';
import Logo from 'src/components/atoms/common/Logo';
import Profile from 'src/components/atoms/common/Profile';
import { IUser } from 'src/interfaces/user.interface';

interface Props {
  currentUser: IUser;
}

const Nav: React.FC<Props> = ({ currentUser }) => {
  return (
    <header className="border-mvp-gray-50 flex h-[80px] items-center border-b bg-white pr-[100px]">
      <div className="w-[100px] text-center">
        <Logo />
      </div>

      <div className="flex flex-1 justify-between">
        <Image src={MenuSVG} alt="Menu icon" className="cursor-pointer" priority />

        <Profile user={currentUser} />
      </div>
    </header>
  );
};

export default Nav;
