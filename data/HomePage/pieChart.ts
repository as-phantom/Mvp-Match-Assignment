import { IGateway } from 'src/interfaces/gateway.interface';
import { IProject } from 'src/interfaces/project.interface';
import { IReport } from 'src/interfaces/report.interface';

export function pieChartOption(reports: IReport[], currentProject: IProject | undefined, currentGateway: IGateway | undefined) {
  if (currentProject && !currentGateway) {
    reports = reports.filter((r) => r.projectId === currentProject.projectId);
  } else if (!currentProject && currentGateway) {
    reports = reports.filter((r) => r.gatewayId === currentGateway.gatewayId);
  }

  const total: number = reports.reduce((a, c) => a + c.amount, 0);
  const data = reports.map((r) => ({ value: r.amount, name: `${((r.amount / total) * 100).toFixed(1)}%` }));

  return {
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        legend: {
          show: true,
        },
        label: {
          show: true,
          position: 'inside',
          color: 'white',
        },
        data,
      },
    ],
  };
}
