import {
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

function Shop() {
  return (
    <Container>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 800, cols: 1 }]}>
        <Stack>
          <Title align="center">SHOP1</Title>
          <Text align="center">Flat 05k Karen Center</Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 16,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d374753.03229757387!2d-1.1353342495195555!3d50.56984649072089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1670416989874!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Stack>
        <Stack>
          <Title align="center">SHOP2</Title>
          <Text align="center">0 Henry Stream</Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 16,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d382214.515973577!2d-3.9213622527858685!3d50.99842049338845!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1670495235883!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Stack>
        <Stack>
          <Title align="center">SHOP3</Title>
          <Text align="center">35 Yvette Gateway</Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 16,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d161295.78591532118!2d-1.873079672177183!3d50.826595032276614!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1670495190498!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Stack>
        <Stack>
          <Title align="center">SHOP4</Title>
          <Text align="center">83 Robinson Corners.</Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 16,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d260270.59566992125!2d-2.645210926449762!3d52.6944512952184!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1670495278805!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default Shop;
