import { generateId } from 'lib/id';
import GraphSVG from 'public/svg/graph.svg';
import GridSVG from 'public/svg/grid.svg';
import MonitorSVG from 'public/svg/monitor.svg';
import PieChartSVG from 'public/svg/pie-chart.svg';
import ShutdownSVG from 'public/svg/shutdown.svg';
import { ISideNavItem } from 'src/interfaces/sideNavItem.interface';

export const sideNavItems: ISideNavItem[] = [
  {
    id: generateId(),
    href: '/',
    icon: GraphSVG,
    alt: 'Graph icon',
  },
  {
    id: generateId(),
    href: '/',
    icon: GridSVG,
    alt: 'Grid icon',
  },
  {
    id: generateId(),
    href: '/',
    icon: MonitorSVG,
    alt: 'Monitor icon',
  },
  {
    id: generateId(),
    href: '/',
    icon: PieChartSVG,
    alt: 'Pie chart icon',
  },
  {
    id: generateId(),
    href: '/',
    icon: ShutdownSVG,
    alt: 'Shutdown icon',
  },
];
