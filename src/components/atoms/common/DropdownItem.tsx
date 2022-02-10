import React from 'react';
import { IDropdownItem } from 'src/interfaces/dropdownItem.interface';

interface Props {
  dropdownItem: IDropdownItem;
  valueProperty: string;
  onDropdownItemSelected: (dropdownItem: IDropdownItem) => void;
}

const DropdownItem: React.FC<Props> = ({ dropdownItem, valueProperty, onDropdownItemSelected }) => {
  return (
    <li
      className="bg-mvp-green-50 hover:text-mvp-green-50 cursor-pointer px-4 py-1 text-left text-sm font-normal text-white transition-all hover:bg-white"
      onClick={() => onDropdownItemSelected(dropdownItem)}
    >
      {dropdownItem[valueProperty]}
    </li>
  );
};

export default DropdownItem;
