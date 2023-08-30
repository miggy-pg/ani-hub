import React, { useEffect, useState } from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import AnimeOfflineDatabase from "../../assets/anime-offline-database.json";
import { MyList } from "../../components/Management/MyList";
import { Thumbnail } from "../../components/Management/MyList/Thumbnail";
import { AnimeList } from "../../components/Management/AnimeList";
import { SearchBar } from "../../components/Common/SearchBar";
import { Image } from "../../components/Common/Image";
import { Details } from "../../components/Common/Image/Details";

const tempQuery = "cowboy%20bebop";

function HomePage() {
  const [query, setQuery] = useState("");
  const [isSelectedAnime, setSelectedAnime] = useState("");
  const [animes, setAnimes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("A");
  });

  useEffect(() => {
    console.log("B");
  });
  console.log("C");

  useEffect(function () {
    async function fetchAnimes() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://kitsu.io/api/edge/anime?filter[text]=${tempQuery}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching animes.");

        const data = await res.json();
        if (data.meta.count === 0) throw new Error("No anime not found.");

        setAnimes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAnimes();
  }, []);
  const handleSelectedAnime = (clickedThumbnail) => {
    setSelectedAnime(clickedThumbnail);
  };

  return (
    <section className="anime__container">
      <div className="container">
        <SearchBar query={query} setQuery={setQuery} />
        <div className="row">
          <MyList>
            <Thumbnail displayAnime={isSelectedAnime} key={isSelectedAnime} />
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
                      onClick={() => anime && handleSelectedAnime(anime.title)}
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
