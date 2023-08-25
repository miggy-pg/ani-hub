export function AnimeImage(props) {
  return (
    <ul>
      {props.tags &&
        props.tags.map((tag, index) => (
          <li key={index}>{tag.toUpperCase()}</li>
        ))}
    </ul>
  );
}
