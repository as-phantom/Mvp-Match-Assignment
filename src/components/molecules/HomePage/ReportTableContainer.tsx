import React from 'react';
import ReportTable from 'src/components/atoms/HomePage/ReportTable';

interface Props {
  columns: string[];
  data: string[][];
}

const ReportTableContainer: React.FC<Props> = ({ columns, data }) => {
  return (
    <div className="hidden px-4 pt-2 group-focus-within:flex">
      <ReportTable columns={columns} data={data}></ReportTable>
    </div>
  );
};

export default ReportTableContainer;
