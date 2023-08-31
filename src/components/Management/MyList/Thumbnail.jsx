import { useEffect, useState } from "react";
import { Image } from "../../Common/Image";
import { Details } from "../../Common/Image/Details";
import { Rating } from "../../Common/Rating";
import { Container } from "./Container";

export function Thumbnail({ selectedId }) {
  const [anime, selectedAnime] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { data } = anime;

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
              <Rating />
            </Container>
            <Container>
              <h4 style={{ color: "#fff" }}>{data && data.title}</h4>
            </Container>
          </>
        )}
      </div>
    </div>
  );
}
