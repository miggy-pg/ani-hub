import { useEffect } from "react";

function useKey(key, action) {
  useEffect(() => {
    const callback = (ev) => {
      if (ev.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
}

export default useKey;
