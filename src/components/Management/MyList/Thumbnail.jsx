import AnimeOfflineDatabase from "../../../assets/anime-offline-database.json";
import { Image } from "../../Common/Image";
import { Details } from "../../Common/Image/Details";
import { Rating } from "../../Common/Rating";
import { Container } from "./Container";

export function Thumbnail({ displayAnime }) {
  let findAnime = AnimeOfflineDatabase.data.find(
    (anime) => anime.title === displayAnime
  );

  return (
    <div className="anime__sidebar__preview d-flex justify-content-center align-items-center">
      <div className="col">
        <Container>
          <div className="anime__sidebar__view__item">
            <Image anime={findAnime}></Image>
            <Details anime={findAnime}></Details>
          </div>
        </Container>
        <Container>
          <Rating />
        </Container>
        <Container>
          <h4 style={{ color: "#fff" }}>{findAnime && findAnime.title}</h4>
        </Container>
      </div>
    </div>
  );
}
