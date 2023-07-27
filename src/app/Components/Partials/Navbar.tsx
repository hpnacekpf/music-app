import { Navbar, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from "./UserButton/UserButton.tsx";

const mockdata = [
  {label: 'Dashboard', icon: IconGauge},
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
  },
  {label: 'Analytics', icon: IconPresentationAnalytics},
  {label: 'Contracts', icon: IconFileAnalytics},
  {label: 'Settings', icon: IconAdjustments},
  {
    label: 'Security',
    icon: IconLock,
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    // paddingTop: theme.spacing.xl,
    // paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarComponent() {
  const {classes} = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label}/>);

  return (
    <Navbar width={{sm: 300}} p="md" className={classes.navbar}>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}
