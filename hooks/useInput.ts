import { Dispatch, SetStateAction, useCallback, useState } from "react";

type Handler = (e: unknown) => void;
type ReturnTypes<T = unknown> = [T, Handler, Dispatch<SetStateAction<T>>];

const useInput = <T = string | boolean>(initialValue: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: any): void => {
    setValue(e.target?.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
