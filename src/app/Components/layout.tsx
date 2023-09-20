import { NavbarComponent } from "./Partials/Navbar.tsx";
import { HeaderComponent } from "./Partials/Header.tsx";
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge, IconLock,
  IconNotes,
  IconPresentationAnalytics, TablerIconsProps
} from "@tabler/icons-react";
import { createStyles } from "@mantine/core";
import { Outlet  } from "react-router-dom";
import Player from "./Partials/Player";

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
  },
  header: {
    height: '55px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },
  content: {
    width: '100%',
  }
}));

interface HeaderResponsiveProps {link: string; icon: (props: TablerIconsProps) => JSX.Element; label: string}


function LayoutComponent() {
  const {classes} = useStyles();

  const mockdata: HeaderResponsiveProps[] = [
    {label: 'Dashboard', icon: IconGauge, link: '/'},
    {
      label: 'Market news',
      icon: IconNotes,
      link: '/detail'
    },
    {
      label: 'Releases',
      icon: IconCalendarStats,
      link: 'releases'
    },
    {label: 'Analytics', icon: IconPresentationAnalytics, link: 'analytics'},
    {label: 'Contracts', icon: IconFileAnalytics, link: 'contracts'},
    {label: 'Settings', icon: IconAdjustments, link: 'settings'},
    {
      label: 'Security',
      icon: IconLock,
      link: 'security'
    },
  ];

  return (
    <div>
      <HeaderComponent className={classes.header} links={mockdata}/>
      <div className={classes.container}>
        {/*<NavbarComponent mockData={mockdata}/>*/}
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
      <Player/>
    </div>
  );
}

export default LayoutComponent;
