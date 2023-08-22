import { AnimeImage } from "./AnimeTags";

function AnimeTitle(props) {
  return (
    <h5>
      <p>{props.title}</p>
    </h5>
  );
}

export function AnimeThumbnail(props) {
  return (
    <div className="anime__item__text">
      <AnimeImage tags={props.anime.tags} />
      <AnimeTitle title={props.anime.title} />
    </div>
  );
}
