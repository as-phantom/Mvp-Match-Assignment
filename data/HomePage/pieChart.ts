import { localizeAmount } from 'lib/localizeAmount';
import { IGateway } from 'src/interfaces/gateway.interface';
import { IProject } from 'src/interfaces/project.interface';
import { IReport } from 'src/interfaces/report.interface';

export function pieChartOption(
  reports: IReport[],
  projects: IProject[],
  gateways: IGateway[],
  currentProject: IProject | undefined,
  currentGateway: IGateway | undefined
) {
  let data: { value: number; name: string }[] = [];

  if (currentProject && !currentGateway) {
    const reportsByProjectId = reports.filter((r) => r.projectId === currentProject.projectId);

    data = gateways.map(({ gatewayId, name }) => {
      const value = reportsByProjectId.filter((r) => r.gatewayId === gatewayId).reduce((a, c) => a + c.amount, 0);

      return { value, name };
    });
  } else if (!currentProject && currentGateway) {
    const reportsByGatewayId = reports.filter((r) => r.gatewayId === currentGateway.gatewayId);

    data = projects.map(({ projectId, name }) => {
      const value = reportsByGatewayId.filter((r) => r.projectId === projectId).reduce((a, c) => a + c.amount, 0);

      return { value, name: name };
    });
  }

  return {
    tooltip: {
      show: true,
      formatter: ({ value, name }: { value: number; name: string }) =>
        `<strong style="color: #011f4b">${name}: ${localizeAmount(value)}</strong>`,
    },
    legend: {
      show: true,
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#f1fafe',
      left: 0,
      z: 0,
    },
    series: [
      {
        type: 'pie',
        radius: ['30%', '65%'],
        center: ['50%', '57.5%'],
        legend: {
          show: true,
        },
        label: {
          show: true,
          position: 'inside',
          color: 'white',
          formatter: ({ percent }: { percent: number }) => `${percent}%`,
        },
        data,
      },
    ],
  };
}
