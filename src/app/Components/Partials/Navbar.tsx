import { createStyles, Navbar, rem, ScrollArea } from '@mantine/core';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
// import { UserButton } from "./UserButton/UserButton.tsx";
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

interface HeaderResponsiveItemProps {
  link: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  label: string
}

interface HeaderResponsiveProps {
  mockData: { link: string; icon: (props: TablerIconsProps) => JSX.Element; label: string }[];
}

export function NavbarComponent({mockData}: HeaderResponsiveProps) {
  const {classes} = useStyles();
  const links = mockData.map((item: HeaderResponsiveItemProps, index: number) => {
    return (
      <Link style={{textDecoration: 'none'}} key={index} to={item.link}>
        <LinksGroup {...item}/>
      </Link>
    )
  });

  return (
    <Navbar width={{sm: 250}} p="md" className={classes.navbar}>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
