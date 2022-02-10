import Image from 'next/image';
import NoReportsSVG from 'public/svg/no-reports.svg';
import React from 'react';

const NoReports: React.FC = () => {
  return (
    <section className="flex  items-center">
      <div className="mx-auto max-w-[470px] text-center">
        <h3>No reports</h3>

        <p className="text-mvp-blue-100 pb-12 font-bold">
          Currently you have no data for the reports to be generated. Once you start generating traffic through the Balance application the
          reports will be shown.
        </p>

        <Image src={NoReportsSVG} alt="No reports icon" priority />
      </div>
    </section>
  );
};

export default NoReports;
