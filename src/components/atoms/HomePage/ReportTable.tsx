import React from 'react';

interface Props {
  columns: string[];
  data: string[][];
}

const ReportTable: React.FC<Props> = ({ columns, data }) => {
  return (
    <table className="flex-1">
      <thead>
        <tr className="bg-white leading-[2rem]">
          {columns.map((column, index) => (
            <th key={index} className="px-2 text-center font-normal first:text-left last:text-right">
              {column}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="odd:leading-10 even:bg-white even:leading-[2rem]">
            {row.map((cell, j) => (
              <td key={j} className="px-2 text-center first:text-left last:text-right">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
