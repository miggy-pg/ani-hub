import React from "react";

export function Details({ anime }) {
  return (
    <>
      <div className="ep">
        {anime && anime.attributes.episodeLength
          ? anime.attributes.episodeLength
          : null}
      </div>
      <div className="view">
        <i className="fa fa-eye"></i>
        {anime && anime.attributes.popularityRank
          ? anime.attributes.popularityRank
          : null}
      </div>
      <span className="title">
        <p>
          {anime && anime.attributes.titles.en
            ? anime.attributes.titles.en
            : null}
        </p>
      </span>
    </>
  );
}
