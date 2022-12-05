import {
  Card,
  Center,
  Flex,
  Paper,
  Progress,
  Text,
  Group,
} from "@mantine/core";
import React, { ReactElement } from "react";
import CountUp from "react-countup";
import { TablerIcon } from "@tabler/icons";
import { iconSizes } from "@mantine/core/lib/Stepper/Step/Step.styles";

interface StatProps {
  title: string;
  text: string;
  value: number;
  icon: ReactElement<TablerIcon>;
}

function Stat({ title, text, value, icon }: StatProps) {
  return (
    <Card
      style={{ width: "100%" }}
      withBorder
      radius="md"
      p="xl"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Flex justify="space-between">
        <Text weight={700} size={48}>{title}</Text>
        {icon}
      </Flex>
      <Flex my="md">
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
