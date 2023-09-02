import React, { useEffect, useState } from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { MyList } from "../../components/Management/MyList";
import { Thumbnail } from "../../components/Management/MyList/Thumbnail";
import { AnimeList } from "../../components/Management/AnimeList";
import { SearchBar } from "../../components/Common/SearchBar";
import { Image } from "../../components/Common/Image";
import { Details } from "../../components/Common/Image/Details";

function HomePage() {
  const [query, setQuery] = useState("kimi no nawa");
  const [selectedId, setSelectedId] = useState(null);
  const [animes, setAnimes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorite, setFavorite] = useState([]);

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddFavorite = (anime) => {
    setFavorite((oldAnime) => [...oldAnime, anime]);
  };

  const handleSelectedAnime = (clickedThumbnail) => {
    setSelectedId(clickedThumbnail);
  };

  const handleDeleteAnime = (id) => {
    setFavorite((favoriteAnime) =>
      favoriteAnime.filter((anime) => anime.id !== id)
    );
  };

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchAnimes() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://kitsu.io/api/edge/anime?filter[text]=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching animes.");

          const data = await res.json();
          if (data.meta.count === 0) throw new Error("No anime found.");

          setAnimes(data);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setAnimes([]);
        setError("");
        return;
      }
      handleCloseMovie();
      fetchAnimes();

      return () => {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <section className="anime__container">
      <div className="container">
        <SearchBar query={query} setQuery={setQuery} />
        <div className="row">
          <MyList favorite={favorite}>
            {selectedId ? (
              <Thumbnail
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddFavorite={handleAddFavorite}
                favorite={favorite}
                key={selectedId}
              />
            ) : null}
          </MyList>
          <div className="col-lg-8 col-md-14 col-sm-12">
            <div className="row">
              {isLoading && <h3 style={{ color: "white" }}>Loading...</h3>}
              {error && <h3 style={{ color: "white" }}>{error}</h3>}
              {!isLoading &&
                !error &&
                Object.entries(animes).length > 0 &&
                animes.data.map((anime, index) => (
                  <AnimeList key={index}>
                    <div
                      style={{ cursor: "pointer" }}
                      className="anime__item"
                      onClick={() => anime && handleSelectedAnime(anime.id)}
                    >
                      <div className="anime__item__pic set-bg">
                        <Image anime={anime}></Image>
                        <Details anime={anime}></Details>
                      </div>
                    </div>
                  </AnimeList>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
