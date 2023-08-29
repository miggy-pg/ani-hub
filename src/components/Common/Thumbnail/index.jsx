import { AnimeImage } from "./AnimeTags";

export function Thumbnail(props) {
  return (
    <div className="anime__item__text">
      <AnimeImage
        tags={props.anime && props.anime.tags ? props.anime.tags : null}
      />
      <h5>
        <p>{props.anime && props.anime.title ? props.anime.title : null}</p>
      </h5>
    </div>
  );
}
