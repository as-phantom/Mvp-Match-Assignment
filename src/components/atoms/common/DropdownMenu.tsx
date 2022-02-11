import React from 'react';

const DropdownMenu: React.FC = ({ children }) => {
  return (
    <ul className="bg-mvp-green-50 rounded-0 no-scrollbar invisible absolute left-0 right-0 top-full z-[1] max-h-56 overflow-auto pb-2 opacity-0 transition-all group-focus:visible group-focus:rounded-tl-none group-focus:rounded-tr-none group-focus:opacity-100">
      {children}
    </ul>
  );
};

export default DropdownMenu;
