import { localizeAmount } from 'lib/localizeAmount';
import React from 'react';

interface Props {
  name: string;
  total: number;
}

const ReportListItem: React.FC<Props> = ({ name, total }) => {
  return (
    <div className="rounded-1 hover:bg-mvp-gray-50 flex cursor-pointer justify-between bg-white p-6">
      <strong>{name}</strong>

      <strong className="uppercase">Total: {localizeAmount(total)}</strong>
    </div>
  );
};

export default ReportListItem;
