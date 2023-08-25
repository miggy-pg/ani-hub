export function AnimeImage(props) {
  return (
    <img
      src={props.anime && props.anime.picture ? props.anime.picture : null}
      alt=""
    />
  );
}
