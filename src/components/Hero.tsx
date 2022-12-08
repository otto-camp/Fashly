import React from "react";
import {
  createStyles,
  Container,
  Text,
  Button,
  Overlay,
  Title,
} from "@mantine/core";
import heroImage from "../assets/hero-image.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage: "url(" + heroImage + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,
    marginInline: "auto",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.md,
    },
  },

  control: {
    textAlign: "center",
    marginInline: "auto",
    width: "40%",
    marginTop: theme.spacing.xl * 1.5,
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

function Hero() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      className={classes.hero}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, .45) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          A fully featured React components library
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever –
          Mantine includes more than 120 customizable components and hooks to
          cover you in any situation
        </Text>

        <Button
          variant="gradient"
          size="lg"
          radius="md"
          className={classes.control}
          onClick={() => navigate("/shop")}
        >
          Shops
        </Button>
      </Container>
    </motion.div>
  );
}

export default Hero;
