export function AnimeList({ children }) {
  return (
    <div className="col-lg-4 col-md-8 col-sm-6">
      <div className="trending__anime">{children}</div>
    </div>
  );
}
