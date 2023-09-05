import { useState, useEffect } from "react";

function useMovies(query) {
  const [animes, setAnimes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      // callback?.();
      const controller = new AbortController();

      async function fetchAnimes() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://kitsu.io/api/edge/anime?filter[text]=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching animes.");

          const data = await res.json();
          if (data.meta.count === 0) throw new Error("No anime found.");

          setAnimes(data);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setAnimes([]);
        setError("");
        return;
      }
      fetchAnimes();

      return () => {
        controller.abort();
      };
    },
    [query]
  );
  return { animes, isLoading, error };
}

export default useMovies;
