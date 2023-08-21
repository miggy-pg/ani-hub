import React from "react";

export function AnimeReview() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="anime__sidebar">
        <div className="anime__sidebar__view">
          <div className="section-title">
            <h5>Top Views</h5>
          </div>
          <ul className="filter__controls">
            <li className="active" data-filter="*">
              Day
            </li>
            <li data-filter=".week">Week</li>
            <li data-filter=".month">Month</li>
            <li data-filter=".years">Years</li>
          </ul>
          <div className="filter__gallery">
            <div
              className="anime__sidebar__view__item set-bg mix day years"
              data-setbg="img/sidebar/tv-1.jpg"
            >
              <div className="ep">18 / ?</div>
              <div className="view">
                <i className="fa fa-eye"></i> 9141
              </div>
              <h5>
                <p>Boruto: Naruto next generations</p>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
