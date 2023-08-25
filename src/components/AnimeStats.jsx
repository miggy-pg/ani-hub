import { AnimeComments } from "./AnimeComments";
import { AnimeEpisodes } from "./AnimeEpisodes";
import { AnimeImage } from "./AnimeImage";
import { AnimeViews } from "./AnimeViews";

export function AnimeStats(props) {
  return (
    <div className="anime__item__pic set-bg">
      <AnimeImage anime={props.anime} />
      <AnimeEpisodes
        episodes={
          props.anime && props.anime.episodes ? props.anime.episodes : null
        }
      />
      <AnimeComments />
      <AnimeViews />
    </div>
  );
}
