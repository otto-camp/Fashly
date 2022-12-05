import {
  AspectRatio,
  Card,
  Container,
  createStyles,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import Hero from "../components/Hero";
import product1 from "../assets/products/product1.webp";
import product2 from "../assets/products/product2.webp";
import product3 from "../assets/products/product3.webp";
import product4 from "../assets/products/product4.webp";
import Stat from "../components/Stat";
import { IconBriefcase, IconReportMoney, IconShoe } from "@tabler/icons";

const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image: product1,
    date: "August 18, 2022",
  },
  {
    title: "Best forests to visit in North America",
    image: product2,
    date: "August 27, 2022",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image: product3,
    date: "September 9, 2022",
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image: product4,
    date: "September 12, 2022",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

function Home() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      mt={32}
      radius={0}
      component="a"
      href="/products"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} width="100%" height="auto" />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container my="xs" style={{ maxWidth: 1400 }}>
      <Hero />
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "xs" }}
        justify="space-around"
        mt={32}
        mb={16}
      >
        <Stat
          icon={<IconShoe />}
          title="Shoes"
          text="Pairs of shoes are in out catalog"
          value={43}
        />
        <Stat
          icon={<IconBriefcase />}
          title="Deal"
          text="Deals last year"
          value={60}
        />
        <Stat
          icon={<IconReportMoney />}
          title="Sales"
          text="Sold only last month"
          value={14532}
        />
      </Flex>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

export default Home;
