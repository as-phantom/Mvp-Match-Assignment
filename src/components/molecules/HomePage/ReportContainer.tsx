import { localizeAmount } from 'lib/localizeAmount';
import React, { useCallback } from 'react';
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
  const projectGateways = useCallback(
    (project: IProject) =>
      gateways.map((gateway, index) => (
        <div key={gateway.gatewayId} className="group" tabIndex={index}>
          <ReportListItem
            name={gateway.name}
            total={reports
              .filter((r) => r.gatewayId === gateway.gatewayId && r.projectId === project.projectId)
              .reduce((a, c) => a + c.amount, 0)}
          />

          <ReportTableContainer
            columns={['Date', 'Transaction ID', 'Amount']}
            data={reports
              .filter((r) => r.gatewayId === gateway.gatewayId && r.projectId === project.projectId)
              .map((r) => [r.created, r.paymentId, localizeAmount(r.amount)])}
          />
        </div>
      )),
    [reports, gateways]
  );

  const gatewayProjects = useCallback(
    (gateway: IGateway) =>
      projects.map((project, index) => (
        <div key={project.projectId} className="group" tabIndex={index}>
          <ReportListItem
            name={project.name}
            total={reports
              .filter((r) => r.projectId === project.projectId && r.gatewayId === gateway.gatewayId)
              .reduce((a, c) => a + c.amount, 0)}
          />

          <ReportTableContainer
            columns={['Date', 'Transaction ID', 'Amount']}
            data={reports
              .filter((r) => r.projectId === project.projectId && r.gatewayId === gateway.gatewayId)
              .map((r) => [r.created, r.paymentId, localizeAmount(r.amount)])}
          />
        </div>
      )),
    [reports, projects]
  );

  const projectGateway = useCallback(
    (project: IProject, gateway: IGateway) => (
      <ReportTableContainer
        columns={['Date', 'Transaction ID', 'Amount']}
        data={reports
          .filter((r) => r.projectId === project.projectId && r.gatewayId === gateway.gatewayId)
          .map((r) => [r.created, r.paymentId, localizeAmount(r.amount)])}
      />
    ),
    [reports]
  );

  const projectsGateways = useCallback(
    () =>
      projects.map((project, index) => (
        <div key={project.projectId} className="group" tabIndex={index}>
          <ReportListItem
            name={project.name}
            total={reports.filter((r) => r.projectId === project.projectId).reduce((a, c) => a + c.amount, 0)}
          />

          <ReportTableContainer
            columns={['Date', 'Gateway', 'Transaction ID', 'Amount']}
            data={reports
              .filter((r) => r.projectId === project.projectId)
              .map((r) => [r.created, gateways.find((g) => g.gatewayId === r.gatewayId)!.name, r.paymentId, localizeAmount(r.amount)])}
          />
        </div>
      )),
    [reports, projects, gateways]
  );

  return (
    <div className="bg-mvp-blue-50 rounded-1 flex flex-col gap-8 p-4">
      <strong>
        {currentProject ? currentProject.name : 'All projects'} | {currentGateway ? currentGateway.name : 'All gateways'}
      </strong>

      <div className="flex flex-col gap-2">
        {currentProject && !currentGateway ? (
          <>{projectGateways(currentProject)}</>
        ) : !currentProject && currentGateway ? (
          <>{gatewayProjects(currentGateway)}</>
        ) : currentProject && currentGateway ? (
          <>{projectGateway(currentProject, currentGateway)}</>
        ) : (
          <>{projectsGateways()}</>
        )}
      </div>
    </div>
  );
};

export default ReportContainer;
