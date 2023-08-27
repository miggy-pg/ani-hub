import { useState } from "react";
import AnimeOfflineDatabase from "../assets/anime-offline-database.json";
import { StarReview } from "./StarReview";

export function AnimeWatchedBar({ displayAnime }) {
  let findAnime = AnimeOfflineDatabase.data.find(
    (anime) => anime.title === displayAnime
  );
  const [rating, setRating] = useState(1);

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="anime__sidebar__preview">
      <div className="anime__sidebar__view__item set-bg">
        {findAnime ? (
          <img src={findAnime.picture ? findAnime.picture : null} alt="" />
        ) : (
          <span className="thumbnail-holder"></span>
        )}

        <div className="ep">18 / ?</div>
        <div className="view">
          <i className="fa fa-eye"></i> 9141
        </div>
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <StarReview
              key={i}
              onClickStar={() => setRating(i + 1)}
              full={rating >= i + 1}
            />
          ))}
          <p>{rating || ""}</p>
        </div>

        <h5>
          <p>{findAnime && findAnime.title}</p>
        </h5>
      </div>
    </div>
  );
}
