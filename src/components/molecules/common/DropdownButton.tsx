import Image from 'next/image';
import TriangleSVG from 'public/svg/triangle.svg';
import React, { useCallback, useRef } from 'react';
import DropdownItem from 'src/components/atoms/common/DropdownItem';
import DropdownMenu from 'src/components/atoms/common/DropdownMenu';
import Loader from 'src/components/atoms/common/Loader';
import { IDropdownItem } from 'src/interfaces/dropdownItem.interface';

interface Props {
  buttonText: string;
  dropdownItems: IDropdownItem[] | null;
  keyProperty: string;
  valueProperty: string;
  selectedDropdownItem?: IDropdownItem;
  onDropdownItemSelected: (dropdownItem: IDropdownItem) => void;
}

const DropdownButton: React.FC<Props> = ({
  buttonText,
  dropdownItems,
  keyProperty,
  valueProperty,
  selectedDropdownItem,
  onDropdownItemSelected,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onDropdownItemSelectedHandler = useCallback(
    (dropdownItem: IDropdownItem) => {
      buttonRef.current?.blur();
      onDropdownItemSelected(dropdownItem);
    },
    [buttonRef, onDropdownItemSelected]
  );

  return (
    <button
      ref={buttonRef}
      className="btn btn-0 group relative flex items-center transition-all focus:rounded-br-none focus:rounded-bl-none"
    >
      <span className="pr-4">{selectedDropdownItem ? selectedDropdownItem[valueProperty] : buttonText}</span>
      <Image src={TriangleSVG} alt="Triangle icon" priority />

      <DropdownMenu>
        {dropdownItems && (
          <DropdownItem
            dropdownItem={{
              [valueProperty]: buttonText,
            }}
            valueProperty={valueProperty}
            onDropdownItemSelected={onDropdownItemSelectedHandler}
          />
        )}

        {dropdownItems ? (
          dropdownItems.map((dropdownItem) => (
            <DropdownItem
              key={dropdownItem[keyProperty]}
              dropdownItem={dropdownItem}
              valueProperty={valueProperty}
              onDropdownItemSelected={onDropdownItemSelectedHandler}
            />
          ))
        ) : (
          <div className="py-4">
            <Loader flex />
          </div>
        )}
      </DropdownMenu>
    </button>
  );
};

export default DropdownButton;
