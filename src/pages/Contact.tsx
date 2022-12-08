import React from "react";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
  Text,
  createStyles,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconMapPin, IconPhone } from "@tabler/icons";

const useStyles = createStyles((theme) => {
  return {
    container: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.blue[8]
          : theme.colors.blue[2],
      borderRadius: 8,
      [theme.fn.smallerThan("md")]: {
        borderRadius: 0,
      },
    },
    information: {
      margin: 16,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[0]
          : theme.colors.gray[9],
    },
    form: {
      position: "relative",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      borderRadius: 8,
      margin: 16,
      padding: 16,
    },
  };
});

function Contact() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container p={0} role="contentinfo" className={classes.container}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 960, cols: 1 }]}>
        <div className={classes.information}>
          <Title weight={600} size="h1">
            Contact Information
          </Title>
          <Text>
            Leave your email and we will get back to you within 24 hours
          </Text>
          <Stack mah="100%" mih="80%" justify="space-around">
            <Group mt="xl">
              <IconAt size="32" />
              <div>
                <Text>Email</Text>
                <Text size="lg">example@fashly.com</Text>
              </div>
            </Group>
            <Group mt="xl">
              <IconPhone size="32" />
              <div>
                <Text>Phone</Text>
                <Text size="lg">+50 555 55 </Text>
              </div>
            </Group>
            <Group mt="xl">
              <IconMapPin size="32" />
              <div>
                <Text>Address</Text>
                <Text size="lg">2779 Jerde Street Suite 913</Text>
              </div>
            </Group>
          </Stack>
        </div>
        <Container className={classes.form}>
          <form onSubmit={form.onSubmit(() => {})}>
            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                variant="filled"
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="Your email"
                name="email"
                variant="filled"
                {...form.getInputProps("email")}
              />
            </SimpleGrid>

            <TextInput
              label="Subject"
              placeholder="Subject"
              mt="md"
              name="subject"
              variant="filled"
              {...form.getInputProps("subject")}
            />
            <Textarea
              mt="md"
              label="Message"
              placeholder="Your message"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              variant="filled"
              {...form.getInputProps("message")}
            />

            <Group position="center" mt="xl">
              <Button type="submit" size="md">
                Send message
              </Button>
            </Group>
          </form>
        </Container>
      </SimpleGrid>
    </Container>
  );
}

export default Contact;
