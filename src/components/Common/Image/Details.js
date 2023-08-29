import React from "react";

export function Details({ anime }) {
  return (
    <>
      <div className="ep">
        {anime && anime.episodes ? anime.episodes : null}
      </div>
      <div className="view">
        <i className="fa fa-eye"></i> 9141
      </div>
      <h5>
        <p>{anime && anime.title ? anime.title : null}</p>
      </h5>
    </>
  );
}
