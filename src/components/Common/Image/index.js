import React from "react";

export function Image({ anime }) {
  return <img src={anime && anime.picture ? anime.picture : null} alt="" />;
}
