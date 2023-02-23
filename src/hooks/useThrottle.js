import React, { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
  const throttleId = useRef(false);
  const [thrott, setThrott] = useState("");

  useEffect(() => {
    if (!throttleId.current) {
      throttleId.current = true;
      setTimeout(() => {
        throttleId.current = false;
        setThrott(value);
      }, delay);
    }
  }, [value, delay]);
  return thrott;
};

export default useThrottle;
