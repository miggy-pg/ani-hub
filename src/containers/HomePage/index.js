import React, { useState } from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { MyList } from "../../components/Management/MyList";
import { Thumbnail } from "../../components/Management/MyList/Thumbnail";
import { AnimeList } from "../../components/Management/AnimeList";
import { SearchBar } from "../../components/Common/SearchBar";
import { Image } from "../../components/Common/Image";
import { Details } from "../../components/Common/Image/Details";
import useMovies from "../../hooks/useMovies";
import useLocalStorageState from "../../hooks/useLocalStorageState";

function HomePage() {
  const [query, setQuery] = useState("kimi no nawa");
  const [selectedId, setSelectedId] = useState(null);
  const [favorite, setFavorite] = useLocalStorageState([], "favorite");
  // use custom hook
  const { animes, isLoading, error } = useMovies(query);

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

  return (
    <section className="anime__container">
      <div className="container">
        <SearchBar query={query} setQuery={setQuery} />
        <div className="row">
          <MyList favorite={favorite} onDelete={handleDeleteAnime}>
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
