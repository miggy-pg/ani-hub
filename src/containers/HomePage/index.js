import React, { useState } from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import AnimeOfflineDatabase from "../../assets/anime-offline-database.json";
import { MyList } from "../../components/Management/MyList";
import { Thumbnail } from "../../components/Management/MyList/Thumbnail";
import { AnimeList } from "../../components/Management/AnimeList";
import { SearchBar } from "../../components/Common/SearchBar";
import { Image } from "../../components/Common/Image";
import { Details } from "../../components/Common/Image/Details";

function HomePage() {
  const [isSelectedAnime, setSelectedAnime] = useState("");

  console.log("selectedAnime: ", isSelectedAnime);
  const min = 1;
  const max = AnimeOfflineDatabase.data.length;
  const numberAnimes = 10;
  const randomAnime = [];

  for (let i = 0; i < numberAnimes; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    const anime = AnimeOfflineDatabase.data.at(randomNum);
    randomAnime.push(anime);
  }

  const handleSelectedAnime = (clickedThumbnail) => {
    setSelectedAnime(clickedThumbnail);
  };

  return (
    <section className="anime__container">
      <div className="container">
        <SearchBar />
        <div className="row">
          <MyList>
            <Thumbnail displayAnime={isSelectedAnime} key={isSelectedAnime} />
          </MyList>
          <div className="col-lg-8 col-md-14 col-sm-12">
            <div className="row">
              {randomAnime.map((anime, index) => (
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
