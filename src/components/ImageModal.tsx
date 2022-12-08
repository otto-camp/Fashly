import { Image, Modal } from "@mantine/core";
import React from "react";

interface ImageModalProps {
  image: string;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

function ImageModal({ image, opened, setOpened }: ImageModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      withCloseButton={false}
      size="75%"
      transition="scale"
      transitionDuration={400}
      transitionTimingFunction="ease-out"
    >
      <div style={{ width: "60%", marginInline: "auto" }}>
        <Image src={image} width="100%" height="auto" withPlaceholder />
      </div>
    </Modal>
  );
}

export default ImageModal;
