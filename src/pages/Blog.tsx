import { Container, Stack } from "@mantine/core";
import React from "react";
import BlogCard from "../components/BlogCard";

const blogData = [
  {
    title: "Spotify’s Year-End Lists Are the Ultimate Personality Test",
    description:
      "Why the mass sharing of the music streaming service’s year-end lists is uniquely telling",
    fColor: "yellow",
    lColor: "red",
  },
  {
    title: "Would you eat food made from plastic?",
    description:
      "How scientists are transforming plastic waste into food-safe ingredients",
    fColor: "white",
    lColor: "blue",
  },
  {
    title: "How to Create Mattering at Work",
    description:
      "Last month, the U.S. Surgeon General named “mattering at work” a top priority for improving mental health. The announcement reaffirms what we’ve known for many years: Mattering and well-being are inseparable, especially where humans spend 35% of their waking lives.",
    fColor: "teal",
    lColor: "lime",
  },
];

function Blog() {
  return (
    <Container>
      <Stack spacing="xl">
        {blogData.map((data, index) => (
          <BlogCard
            key={data.title}
            title={data.title}
            description={data.description}
            fColor={data.fColor}
            lColor={data.lColor}
            
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Blog;
