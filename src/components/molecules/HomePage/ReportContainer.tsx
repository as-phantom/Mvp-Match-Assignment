import { localizeAmount } from 'lib/localizeAmount';
import React from 'react';
import ReportListItem from 'src/components/atoms/HomePage/ReportListItem';
import ReportTableContainer from 'src/components/molecules/HomePage/ReportTableContainer';
import { IGateway } from 'src/interfaces/gateway.interface';
import { IProject } from 'src/interfaces/project.interface';
import { IReport } from 'src/interfaces/report.interface';

interface Props {
  reports: IReport[];
  projects: IProject[];
  gateways: IGateway[];
  currentProject: IProject | undefined;
  currentGateway: IGateway | undefined;
}

const ReportContainer: React.FC<Props> = ({ reports, projects, gateways, currentProject, currentGateway }) => {
  return (
    <div className="bg-mvp-blue-50 rounded-1 flex flex-col gap-8 p-4">
      <strong>
        {currentProject ? currentProject.name : 'All projects'} | {currentGateway ? currentGateway.name : 'All gateways'}
      </strong>

      <div className="flex flex-col gap-2">
        {currentProject && !currentGateway ? (
          <>
            {gateways.map((gateway, index) => (
              <div key={gateway.gatewayId} className="group" tabIndex={index}>
                <ReportListItem
                  name={gateway.name}
                  total={reports
                    .filter((r) => r.gatewayId === gateway.gatewayId && r.projectId === currentProject.projectId)
                    .reduce((a, c) => a + c.amount, 0)}
                />

                <ReportTableContainer
                  columns={['Date', 'Transaction ID', 'Amount']}
                  data={reports
                    .filter((r) => r.gatewayId === gateway.gatewayId && r.projectId === currentProject.projectId)
                    .map((r) => [r.created, r.paymentId, localizeAmount(r.amount)])}
                />
              </div>
            ))}
          </>
        ) : !currentProject && currentGateway ? (
          <>
            {projects.map((project, index) => (
              <div key={project.projectId} className="group" tabIndex={index}>
                <ReportListItem
                  name={project.name}
                  total={reports
                    .filter((r) => r.projectId === project.projectId && r.gatewayId === currentGateway.gatewayId)
                    .reduce((a, c) => a + c.amount, 0)}
                />

                <ReportTableContainer
                  columns={['Date', 'Transaction ID', 'Amount']}
                  data={reports
                    .filter((r) => r.projectId === project.projectId && r.gatewayId === currentGateway.gatewayId)
                    .map((r) => [r.created, r.paymentId, localizeAmount(r.amount)])}
                />
              </div>
            ))}
          </>
        ) : currentProject && currentGateway ? (
          <>
            <ReportTableContainer
              columns={['Date', 'Transaction ID', 'Amount']}
              data={reports
                .filter((r) => r.projectId === currentProject.projectId && r.gatewayId === currentGateway.gatewayId)
                .map((r) => [r.created, r.paymentId, localizeAmount(r.amount)])}
            />
          </>
        ) : (
          <>
            {projects.map((project, index) => (
              <div key={project.projectId} className="group" tabIndex={index}>
                <ReportListItem
                  name={project.name}
                  total={reports.filter((r) => r.projectId === project.projectId).reduce((a, c) => a + c.amount, 0)}
                />

                <ReportTableContainer
                  columns={['Date', 'Gateway', 'Transaction ID', 'Amount']}
                  data={reports
                    .filter((r) => r.projectId === project.projectId)
                    .map((r) => [
                      r.created,
                      gateways.find((g) => g.gatewayId === r.gatewayId)!.name,
                      r.paymentId,
                      localizeAmount(r.amount),
                    ])}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ReportContainer;
