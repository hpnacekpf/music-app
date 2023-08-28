import { Navbar, ScrollArea, createStyles, rem } from '@mantine/core';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from "./UserButton/UserButton.tsx";
import { Link } from "react-router-dom";
import { TablerIconsProps } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,

    [theme.fn.largerThan('xs')]: {
      width: '250px',
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

interface HeaderResponsiveItemProps {link: string; icon: (props: TablerIconsProps) => JSX.Element; label: string}

interface HeaderResponsiveProps {
  mockData: { link: string; icon: (props: TablerIconsProps) => JSX.Element; label: string }[];
}

export function NavbarComponent({mockData}: HeaderResponsiveProps) {
  const {classes} = useStyles();
  const links = mockData.map((item: HeaderResponsiveItemProps, index: number) => {
    return (
      <Link style={{ textDecoration: 'none' }} key={index} to={item.link}>
        <LinksGroup {...item}/>
      </Link>
    )
  });

  return (
    <Navbar width={{sm: 250}} p="md" className={classes.navbar}>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div>{links}</div>
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
