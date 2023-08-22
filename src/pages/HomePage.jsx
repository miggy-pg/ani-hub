import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import AnimeOfflineDatabase from "../assets/anime-offline-database.json";
import { AnimeList } from "../components/AnimeList";
import { AnimeReview } from "../components/AnimeReview";
import { SearchBar } from "../components/SearchBar";

function HomePage() {
  const min = 1;
  const max = AnimeOfflineDatabase.data.length;
  const numberAnimes = 10;
  const randomAnime = [];

  for (let i = 0; i < numberAnimes; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    const anime = AnimeOfflineDatabase.data.at(randomNum);
    randomAnime.push(anime);
  }
  return (
    <section className="anime__container">
      <div className="container">
        <SearchBar />
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <AnimeReview />
          </div>
          <div className="col-lg-8 col-md-14 col-sm-12">
            <div className="row">
              {randomAnime.map((anime, index) => (
                <AnimeList anime={anime} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
