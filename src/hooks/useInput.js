import { useState } from 'react';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChangeHandler = (event) => setValue(event.target.value);
  return [value, onChangeHandler];
}

export default useInput;
