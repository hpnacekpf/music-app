import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem, Autocomplete,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { IconSearch } from "@tabler/icons-react";
import { ActionToggle } from "./ActionToggle/ActionToggle.tsx";

const HEADER_HEIGHT = rem(56);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '100%',
    height: '55px',
    margin: 0
  },

  links: {
    display: 'none',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor}).background,
      color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    },
    width: '400px'
  },
  searchMobile: {
    margin: '5px',
    width: 'calc(100% - 10px)',
  },
  imageLogo: {
    [theme.fn.smallerThan('xs')]: {
      display: '50%',
    },
    [theme.fn.smallerThan('sm')]: {
      width: '50%'
    },
    [theme.fn.largerThan('xs')]: {
      width: '30%'
    },
    [theme.fn.largerThan('lg')]: {
      width: '10%'
    },
  }
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderComponent({links}: HeaderResponsiveProps) {
  const [opened, {toggle, close}] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const {classes, cx} = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {[classes.linkActive]: active === link.link})}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <MantineLogo size={28}/>
        {/*<img className={classes.imageLogo} src="/src/app/assets/images/hpnaceKPF.png"/>*/}
        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Tìm kiếm"
            icon={<IconSearch size="1rem" stroke={1.5}/>}
            data={[]}
          />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <ActionToggle/>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm"/>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <Autocomplete
                className={classes.searchMobile}
                placeholder="Search"
                icon={<IconSearch size="1rem" stroke={1.5}/>}
                data={[]}
              />
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
