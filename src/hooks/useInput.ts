import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, setValue, onChange] as const;
};

export default useInput;
