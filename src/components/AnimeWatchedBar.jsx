import { useState } from "react";
import AnimeOfflineDatabase from "../assets/anime-offline-database.json";
import { StarReview } from "./StarReview";

export function AnimeWatchedBar({ displayAnime }) {
  let findAnime = AnimeOfflineDatabase.data.find(
    (anime) => anime.title === displayAnime
  );
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className="anime__sidebar__preview d-flex justify-content-center align-items-center">
      <div className="col">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="anime__sidebar__view__item">
            {findAnime ? (
              <img src={findAnime.picture ? findAnime.picture : null} alt="" />
            ) : (
              <div className="thumbnail-holder"></div>
            )}

            <div className="ep">18 / ?</div>
            <div className="view">
              <i className="fa fa-eye"></i> 9141
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <StarReview
                key={i}
                onClickStar={() => setRating(i + 1)}
                full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                onHoverIn={() => setTempRating(i + 1)}
                onHoverOut={() => setTempRating(0)}
              />
            ))}
          </div>
          <p
            style={{
              fontSize: "1.4rem",
              color: "#fff",
              margin: "0 0 0 1rem",
              padding: "0",
            }}
          >
            {tempRating || rating || 0}
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <h4 style={{ color: "#fff" }}>{findAnime && findAnime.title}</h4>
        </div>
      </div>
    </div>
  );
}
