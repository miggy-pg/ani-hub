import React from "react";
import { AnimeWatchedBar } from "./AnimeWatchedBar";

export function AnimeReview({ displayAnime }) {
  console.log("displayAnime: ", displayAnime);
  return (
    <div className="col-lg-12 col-md-12 col-sm-8">
      <div className="anime__sidebar">
        <div className="anime__sidebar__view">
          <div className="section-title">
            <h5>My List:</h5>
          </div>
          <AnimeWatchedBar displayAnime={displayAnime} />
        </div>
      </div>
    </div>
  );
}
