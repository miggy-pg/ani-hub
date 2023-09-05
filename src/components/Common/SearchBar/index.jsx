import { useRef } from "react";
import useKey from "../../../hooks/useKey";

export function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);

  // the second parameter is a purposely a function to include a different format to the custom hook we created
  // because in the custom hook, the 'callback' is correctly placed however the 'document.activeElement' condition
  // was not considered when we created the custom hook. Additionally, we are passing multiple variables in a single function
  // while on our custom hook 'useKey', our 'callback' function only allow a single variable.
  // So putting all the variables inside a function is the right choice!
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

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
