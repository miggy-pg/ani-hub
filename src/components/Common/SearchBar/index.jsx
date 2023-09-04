import { useEffect, useRef } from "react";

export function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(() => {
    const callback = (e) => {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };

    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

  return (
    <div className="row anime__searchbar">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="section-title">
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                ref={inputEl}
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
  );
}
