import { endOfMonth, format, startOfMonth } from 'date-fns';
import React, { useCallback, useState } from 'react';
import DatepickerButton from 'src/components/molecules/common/DatepickerButton';
import DropdownButton from 'src/components/molecules/common/DropdownButton';
import { IDropdownItem } from 'src/interfaces/dropdownItem.interface';
import { IFilters } from 'src/interfaces/filters.interface';
import { IGateway } from 'src/interfaces/gateway.interface';
import { IProject } from 'src/interfaces/project.interface';

interface Props {
  projects: IProject[] | null;
  gateways: IGateway[] | null;
  onExportFilters: (filters: IFilters) => void;
}

const Filters: React.FC<Props> = ({ projects, gateways, onExportFilters }) => {
  const [project, setProject] = useState<IProject | undefined>();
  const onProjectSelectedHandler = useCallback((dropdownItem: IDropdownItem | undefined) => {
    setProject(dropdownItem as IProject);
  }, []);

  const [gateway, setGateway] = useState<IGateway | undefined>();
  const onGatewaySelectedHandler = useCallback((dropdownItem: IDropdownItem | undefined) => {
    setGateway(dropdownItem as IGateway);
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
      project,
      gateway,
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
