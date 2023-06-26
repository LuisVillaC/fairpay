import { useEffect, useState } from "react";

export const useLocalStorage = (
  key: string,
  initialValues: unknown
): [unknown, React.Dispatch<React.SetStateAction<unknown>>] => {
  const [state, setState] = useState<unknown>(initialValues);
  useEffect(() => {
    const item: string | null = localStorage.getItem(key);
    if (item) {
      const parsedItem = JSON.parse(item) || {};
      if (Object.keys(parsedItem).length > 0) setState(parsedItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
