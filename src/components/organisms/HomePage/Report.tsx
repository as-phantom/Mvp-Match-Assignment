import { pieChartOption } from 'data/HomePage/pieChart';
import ReactECharts from 'echarts-for-react';
import React, { useMemo } from 'react';
import Loader from 'src/components/atoms/common/Loader';
import ReportContainer from 'src/components/molecules/HomePage/ReportContainer';
import ReportFooter from 'src/components/molecules/HomePage/ReportFooter';
import { IGateway } from 'src/interfaces/gateway.interface';
import { IProject } from 'src/interfaces/project.interface';
import { IReport } from 'src/interfaces/report.interface';

function calculateTotal(reports: IReport[], currentProject: IProject | undefined, currentGateway: IGateway | undefined): number {
  if (currentProject && !currentGateway) {
    return reports.filter((r) => r.projectId === currentProject.projectId).reduce((a, c) => a + c.amount, 0);
  } else if (!currentProject && currentGateway) {
    return reports.filter((r) => r.gatewayId === currentGateway.gatewayId).reduce((a, c) => a + c.amount, 0);
  } else if (currentProject && currentGateway) {
    return reports
      .filter((r) => r.projectId === currentProject.projectId && r.gatewayId === currentGateway.gatewayId)
      .reduce((a, c) => a + c.amount, 0);
  } else {
    return reports.reduce((a, c) => a + c.amount, 0);
  }
}

interface Props {
  reports: IReport[];
  projects: IProject[] | null;
  gateways: IGateway[] | null;
  currentProject: IProject | undefined;
  currentGateway: IGateway | undefined;
}

const Report: React.FC<Props> = ({ reports, projects, gateways, currentProject, currentGateway }) => {
  const total = useMemo(() => calculateTotal(reports, currentProject, currentGateway), [reports, currentProject, currentGateway]);

  return (
    <>
      {!projects || !gateways ? (
        <Loader flex />
      ) : (
        <>
          {(currentProject && !currentGateway) || (!currentProject && currentGateway) ? (
            <>
              <div className="flex w-full gap-6">
                <div className="flex-1">
                  <ReportContainer
                    reports={reports}
                    projects={projects}
                    gateways={gateways}
                    currentProject={currentProject}
                    currentGateway={currentGateway}
                  />
                </div>

                <div className="max-w-lg flex-1">
                  <ReactECharts option={pieChartOption(reports, projects, gateways, currentProject, currentGateway)} />

                  <ReportFooter title={currentProject && !currentGateway ? 'Project Total' : 'Gateway Total'} total={total} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-8">
                <ReportContainer
                  reports={reports}
                  projects={projects}
                  gateways={gateways}
                  currentProject={currentProject}
                  currentGateway={currentGateway}
                />

                <ReportFooter title="Total" total={total} />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Report;
