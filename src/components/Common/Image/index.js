import React from "react";

export function Image({ anime }) {
  return (
    <img
      src={
        anime && anime.attributes.coverImage
          ? anime.attributes.coverImage.original
          : null
      }
      alt=""
    />
  );
}
