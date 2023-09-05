import { useEffect, useRef, useState } from "react";
import { Image } from "../../Common/Image";
import { Details } from "../../Common/Image/Details";
import { Rating } from "../../Common/Rating";
import { Container } from "./Container";
import { Favorite } from "../../Common/Favorite";
import useKey from "../../../hooks/useKey";

export function Thumbnail({
  selectedId,
  onCloseMovie,
  onAddFavorite,
  favorite,
}) {
  const [anime, selectedAnime] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const { data } = anime;

  const countRef = useRef(0);

  useKey("escape", onCloseMovie);

  useEffect(() => {
    if (rating) countRef.current += 1;
  }, [rating]);

  useEffect(
    function () {
      async function getAnimeDetails() {
        setIsLoading(true);

        const res = await fetch(
          `https://kitsu.io/api/edge/anime/${selectedId}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching the anime.");

        const data = await res.json();
        if (data.status === 400) throw new Error("No anime found.");

        selectedAnime(data);
        setIsLoading(false);
      }
      getAnimeDetails();
    },
    [selectedId]
  );

  useEffect(() => {
    if (!data?.attributes?.titles?.en) return;
    document.title = `Anime | ${data?.attributes?.titles?.en}`;

    return () => {
      document.title = "Watch Anime Online in HD with SUB, DUB for FREE";
    };
  }, [data]);

  const isFavorite = favorite.map((anime) => anime.id).includes(selectedId);

  const handleAdd = () => {
    const newAddedFavorite = {
      attributes: data.attributes,
      id: data.id,
      rating,
      countRatingDecisions: countRef.current,
    };
    !isFavorite && onAddFavorite(newAddedFavorite);
    onCloseMovie();
  };

  return (
    <div className="anime__sidebar__preview d-flex justify-content-center align-items-center">
      <div className="col">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Container>
              <div className="anime__sidebar__view__item">
                <Image anime={data}></Image>
                <Details anime={data}></Details>
              </div>
            </Container>
            <Container>
              <Rating
                rating={rating}
                tempRating={tempRating}
                setRating={setRating}
                setTempRating={setTempRating}
              />
            </Container>
            <Container>
              <Favorite handleAdd={handleAdd} />
            </Container>
          </>
        )}
      </div>
    </div>
  );
}
