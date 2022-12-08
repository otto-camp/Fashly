import { Card, Flex, Text } from "@mantine/core";
import React, { ReactElement, useRef } from "react";
import CountUp from "react-countup";
import { TablerIcon } from "@tabler/icons";
import { useInView } from "framer-motion";

interface StatProps {
  title: string;
  text: string;
  value: number;
  icon: ReactElement<TablerIcon>;
}

function Stat({ title, text, value, icon }: StatProps) {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });
  return (
    <Card
      ref={inViewRef}
      style={{
        width: "100%",
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      withBorder
      radius="md"
      p="xl"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Flex justify="space-between">
        <Text weight={700} size={48}>
          {title}
        </Text>
        {icon}
      </Flex>
      <Flex>
        <Text weight={500} size={48}>
          <CountUp
            start={0}
            end={value}
            duration={3}
            enableScrollSpy
            scrollSpyOnce
          >
            {({ countUpRef }) => <span ref={countUpRef}></span>}
          </CountUp>
        </Text>
        <Flex align="end" mb="md" ml="xs">
          <Text size="md">{text}</Text>
        </Flex>
      </Flex>
    </Card>
  );
}

export default Stat;
