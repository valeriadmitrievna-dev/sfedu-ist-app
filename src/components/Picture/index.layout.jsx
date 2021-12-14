import React from "react";
import * as P from "../../styles/picture";
import Image from "../Image";

export default function PictureLayout({ picture }) {
  return (
    <P.Container>
      <Image src={picture.image} alt={picture.title} />
    </P.Container>
  );
}
