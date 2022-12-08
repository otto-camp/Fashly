import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import {
  Button,
  Card,
  ColorSwatch,
  Flex,
  Group,
  Image,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
const ImageModal = React.lazy(() => import("./ImageModal"));

interface CardCarouselProps {
  data: {
    image: string;
    title: string;
    description: string;
    colors: string[];
    sizes: number[];
  }[];
}

function CardCarousel({ data }: CardCarouselProps) {
  const [imageModal, setImageModal] = useState<string>("");
  const [isOpenedImageModal, setIsOpenedImageModal] = useState(false);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card withBorder>
        <Card.Section>
          <ImageModal
            opened={isOpenedImageModal}
            setOpened={setIsOpenedImageModal}
            image={imageModal}
          />
          <Image
            src={item.image}
            alt={item.title}
            width="100%"
            height={500}
            fit="cover"
            withPlaceholder
            
            onClick={() => {
              setIsOpenedImageModal(true);
              setImageModal(item.image);
            }}
          />
        </Card.Section>
        <Title size="h3" mb="md" weight="400">
          {item.title}
        </Title>
        <Text mb="xl">{item.description}</Text>
        <Flex mb="xl">
          <Text mr="md">Color options: </Text>
          <Group spacing="sm">
            {item.colors.map((color) => (
              <ColorSwatch key={color} color={color} />
            ))}
          </Group>
        </Flex>
        <Flex>
          <Text mr="md">Size: </Text>
          <Group>
            {item.sizes.map((size) => (
              <Button compact variant="default" key={size}>
                {size}
              </Button>
            ))}
          </Group>
        </Flex>
      </Card>
    </Carousel.Slide>
  ));
  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default CardCarousel;
