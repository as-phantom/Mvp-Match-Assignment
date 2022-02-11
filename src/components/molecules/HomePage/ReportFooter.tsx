import { localizeAmount } from 'lib/localizeAmount';
import React from 'react';

interface Props {
  title: string;
  total: number;
}

const ReportFooter: React.FC<Props> = ({ title, total }) => {
  return (
    <div className="bg-mvp-blue-50 rounded-1 p-4">
      <strong className="uppercase">
        {title}: {localizeAmount(total)}
      </strong>
    </div>
  );
};

export default ReportFooter;
