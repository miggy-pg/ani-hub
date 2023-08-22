import React from "react";

export function AnimeList({ anime }) {
  console.log("anime: ", anime);
  return (
    <div className="col-lg-8">
      <div className="trending__anime">
        <div className="row anime__searchbar">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="section-title">
              <div className="wrap">
                <div className="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" className="searchButton">
                    <svg
                      className="feather feather-search"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" x2="16.65" y1="21" y2="16.65" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="anime__item">
              <div
                className="anime__item__pic set-bg"
                data-setbg="img/trending/trend-1.jpg"
              >
                <img src={anime.picture} alt={anime.picture} />
                <div className="ep">{anime.episodes}</div>
                <div className="comment">
                  <i className="fa fa-comments"></i> 11
                </div>
                <div className="view">
                  <i className="fa fa-eye"></i> 9141
                </div>
              </div>
              <div className="anime__item__text">
                <ul>
                  {anime.tags.map((tag) => (
                    <li>{tag}</li>
                  ))}
                </ul>
                <h5>
                  <p>{anime.title}</p>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
