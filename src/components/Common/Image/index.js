export function Image({ anime }) {
  return (
    <img
      src={
        anime && anime.attributes.posterImage
          ? anime.attributes.posterImage.original
          : null
      }
      alt=""
    />
  );
}
