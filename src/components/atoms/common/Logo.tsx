import Image from 'next/image';
import Link from 'next/link';
import LogoSVG from 'public/svg/logo.svg';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a>
        <Image src={LogoSVG} alt="Logo icon" priority />
      </a>
    </Link>
  );
};

export default Logo;
