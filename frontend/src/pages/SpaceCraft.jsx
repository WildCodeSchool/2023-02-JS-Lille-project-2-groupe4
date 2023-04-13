import React from "react";
import SpacecraftCard from "../components/spacecraft-component/SpacecraftCard";

const cardCraft = [
  {
    imgSrc:
      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/soyuz_image_20201015191152.jpg",
    name: "Russian",
    inUse: "yes",
    description:
      "Fusce ultricies dui justo, id pharetra sem eleifend et. Cras vehicula sapien quis nisl commodo sagittis. Mauris ultricies ligula at ipsum volutpat, sit amet tincidunt elit porta. Suspendisse fringilla mollis lorem sed tincidunt. Vestibulum quis lacus tempus, malesuada neque nec, pretium nulla. In pharetra, justo a ultricies laoreet, ante libero ultrices ante, eu interdum dui tellus sed velit. Maecenas laoreet nulla et nisl efficitur dignissim. Maecenas rutrum accumsan convallis.",
  },
];

export default function SpaceCraft() {
  const card = cardCraft[0];
  return (
    <div>
      <SpacecraftCard
        imgSrc={card.imgSrc}
        name={card.name}
        inUse={card.inUse}
        description={card.description}
      />
    </div>
  );
}
