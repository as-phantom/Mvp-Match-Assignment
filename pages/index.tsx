import useGateways from 'hooks/useGateways';
import useProjects from 'hooks/useProjects';
import { mutation } from 'lib/mutation';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Loader from 'src/components/atoms/common/Loader';
import Filters from 'src/components/organisms/HomePage/Filters';
import NoReports from 'src/components/organisms/HomePage/NoReports';
import Report from 'src/components/organisms/HomePage/Report';
import { GetReportRequestDTO } from 'src/dto/request/getReportRequestDTO';
import { IFilters } from 'src/interfaces/filters.interface';
import { IGateway } from 'src/interfaces/gateway.interface';
import { IProject } from 'src/interfaces/project.interface';
import { IReport } from 'src/interfaces/report.interface';

const Home: NextPage = () => {
  const [reports, setReports] = useState<IReport[] | null>();
  const [filters, setFilters] = useState<IFilters>();
  const [loading, setLoading] = useState(false);
  const [currentProject, setCurrentProject] = useState<IProject>();
  const [currentGateway, setCurrentGateway] = useState<IGateway>();

  const projects = useProjects();
  const gateways = useGateways();

  useEffect(() => {
    if (!filters) {
      return;
    }

    setCurrentProject(filters.project);
    setCurrentGateway(filters.gateway);

    const getReportRequestDTO: GetReportRequestDTO = {
      from: filters.from,
      to: filters.to,
      ...(filters.project ? { projectId: filters.project.projectId } : {}),
      ...(filters.gateway ? { gatewayId: filters.gateway.gatewayId } : {}),
    };

    setLoading(true);
    mutation<GetReportRequestDTO, IReport[]>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/report`, getReportRequestDTO)
      .then((reports) => {
        setReports(reports);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filters]);

  return (
    <>
      <div className="flex items-center justify-between py-8">
        <div>
          <h3>Reports</h3>
          <strong className="text-mvp-blue-100">Easily generate a report of your transactions</strong>
        </div>

        <Filters projects={projects} gateways={gateways} onExportFilters={(filters) => setFilters(filters)} />
      </div>

      {loading ? (
        <Loader flex />
      ) : reports ? (
        <Report reports={reports} projects={projects} gateways={gateways} currentProject={currentProject} currentGateway={currentGateway} />
      ) : (
        <NoReports />
      )}
    </>
  );
};

export default Home;
