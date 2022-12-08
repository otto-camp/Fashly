import React from "react";
import { createStyles, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  fColor: string;
  lColor: string;
}

function BlogCard({ title, description, fColor, lColor }: BlogCardProps) {
  const useStyles = createStyles((theme) => ({
    card: {
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
      transition: "transform 150ms ease, box-shadow 100ms ease",
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,

      "&:hover": {
        boxShadow: theme.shadows.md,
        transform: "scale(1.02)",
      },

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: 6,
        backgroundImage: theme.fn.linearGradient(0, fColor, lColor),
      },
    },
  }));
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.card}
      onClick={() => navigate("blog1")}
    >
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: fColor, to: lColor }}
      >
        <IconColorSwatch size={28} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {description}
      </Text>
    </Paper>
  );
}

export default BlogCard;
