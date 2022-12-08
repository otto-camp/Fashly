import React, { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  Burger,
  Container,
  Transition,
  Paper,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ThemeButton from "../components/ThemeButton";
import { Link, NavLink, useLocation } from "react-router-dom";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 10,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    maxWidth: 1400,
  },

  navLink: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.cyan[1]
        : theme.colors.dark[9],
    textDecoration: "none",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  responsiveMenu: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

interface NavbarProps {
  links: string[];
}

function Navbar({ links }: NavbarProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(
    location !== null
      ? location.pathname.substring(1).charAt(0).toUpperCase() +
          location.pathname.slice(2)
      : links[0]
  );
  const { classes, cx } = useStyles();

  const items = links.map((link, i) => (
    <Link
      key={i}
      to={link.toLowerCase()}
      className={cx(classes.link, { [classes.linkActive]: active === link })}
      onClick={() => {
        setActive(link);
        close();
      }}
    >
      {link}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={20} className={classes.root} role="navigation">
      <Container className={classes.header}>
        <Title size={42}>
          <NavLink
            to="/home"
            className={classes.navLink}
            onClick={() => setActive("Home")}
          >
            FASHLY
          </NavLink>
        </Title>
        <Group spacing={5} className={classes.links}>
          {items}
          <ThemeButton />
        </Group>

        <Group className={classes.responsiveMenu}>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
          <ThemeButton />
        </Group>
      </Container>
    </Header>
  );
}

export default Navbar;
