import { endOfMonth, format, startOfMonth } from 'date-fns';
import useGateways from 'hooks/useGateways';
import useProjects from 'hooks/useProjects';
import React, { useCallback, useState } from 'react';
import DatepickerButton from 'src/components/molecules/common/DatepickerButton';
import DropdownButton from 'src/components/molecules/common/DropdownButton';
import { IDropdownItem } from 'src/interfaces/dropdownItem.interface';
import { IFilters } from 'src/interfaces/filters.interface';

interface Props {
  onExportFilters: (filters: IFilters) => void;
}

const Filters: React.FC<Props> = ({ onExportFilters }) => {
  const projects = useProjects();
  const gateways = useGateways();

  const [project, setProject] = useState<IDropdownItem | undefined>();
  const onProjectSelectedHandler = useCallback((dropdownItem: IDropdownItem) => {
    setProject(dropdownItem);
  }, []);

  const [gateway, setGateway] = useState<IDropdownItem | undefined>();
  const onGatewaySelectedHandler = useCallback((dropdownItem: IDropdownItem) => {
    setGateway(dropdownItem);
  }, []);

  const [from, setFrom] = useState<Date>(startOfMonth(new Date()));
  const onFromDateChangeHandler = useCallback((date: Date | null) => {
    if (!date) {
      return;
    }

    setFrom(date);
  }, []);

  const [to, setTo] = useState<Date>(endOfMonth(new Date()));
  const onToDateChangeHandler = useCallback((date: Date | null) => {
    if (!date) {
      return;
    }

    setTo(date);
  }, []);

  const onGenerateReportHandler = useCallback(() => {
    const filters: IFilters = {
      from: format(from, 'yyyy-MM-dd'),
      to: format(to, 'yyyy-MM-dd'),
      ...(project ? { projectId: project.projectId } : {}),
      ...(gateway ? { gatewayId: gateway.gatewayId } : {}),
    };

    onExportFilters(filters);
  }, [from, to, project, gateway, onExportFilters]);

  return (
    <div className="flex gap-6">
      <DropdownButton
        buttonText="All projects"
        dropdownItems={projects}
        keyProperty="projectId"
        valueProperty="name"
        selectedDropdownItem={project}
        onDropdownItemSelected={onProjectSelectedHandler}
      />

      <DropdownButton
        buttonText="All gateways"
        dropdownItems={gateways}
        keyProperty="gatewayId"
        valueProperty="name"
        selectedDropdownItem={gateway}
        onDropdownItemSelected={onGatewaySelectedHandler}
      />

      <DatepickerButton buttonText="From date" date={from} maxDate={to} onDateChange={onFromDateChangeHandler} />

      <DatepickerButton buttonText="To date" date={to} minDate={from} onDateChange={onToDateChangeHandler} />

      <button type="button" className="btn btn-1" onClick={onGenerateReportHandler}>
        Generate report
      </button>
    </div>
  );
};

export default Filters;
