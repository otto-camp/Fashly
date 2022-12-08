import { Container, Flex, Stack } from "@mantine/core";
import React, { lazy } from "react";
import { IconBriefcase, IconReportMoney, IconShoe } from "@tabler/icons";
import product1 from "../assets/products/product1.webp";
import product2 from "../assets/products/product2.webp";
import product3 from "../assets/products/product3.webp";
import product4 from "../assets/products/product4.webp";
import CardCarousel from "../components/CardCarousel";
const Stat = lazy(() => import("../components/Stat"));
const Hero = lazy(() => import("../components/Hero"));
const Subscription = lazy(() => import("../components/Subscription"));

const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image: product1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi perspiciatis magni.",
    colors: [
      "#FFD43B",
      "#51CF66",
      "#F76707",
      "#1C7ED6",
      "#C2255C",
      "#141517",
      "#FFFFFF",
    ],
    sizes: [28, 28.5, 29, 29.5, 30],
  },
  {
    title: "Best forests to visit in North America",
    image: product2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi perspiciatis magni.",
    colors: [
      "#FFD43B",
      "#51CF66",
      "#F76707",
      "#1C7ED6",
      "#C2255C",
      "#141517",
      "#FFFFFF",
    ],
    sizes: [28, 28.5, 29, 29.5, 30],
  },
  {
    title: "Hawaii beaches review: better than you think",
    image: product3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi perspiciatis magni.",
    colors: [
      "#FFD43B",
      "#51CF66",
      "#F76707",
      "#1C7ED6",
      "#C2255C",
      "#141517",
      "#FFFFFF",
    ],
    sizes: [28, 28.5, 29, 29.5, 30],
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image: product4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi perspiciatis magni.",
    colors: [
      "#FFD43B",
      "#51CF66",
      "#F76707",
      "#1C7ED6",
      "#C2255C",
      "#141517",
      "#FFFFFF",
    ],
    sizes: [28, 28.5, 29, 29.5, 30],
  },
];

function Home() {
  return (
    <Container my="xs" style={{ maxWidth: 1400 }}>
      <Stack spacing="xl">
        <Hero />

        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "xs" }}
          justify="space-around"
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

        <Subscription />

        <CardCarousel data={mockdata} />
      </Stack>
    </Container>
  );
}

export default Home;
