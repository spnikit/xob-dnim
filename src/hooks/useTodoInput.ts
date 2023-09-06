import { ChangeEvent, useState } from 'react';

export function useTodoInput() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  const resetValue = () => {
    setInputValue('');
  };

  return {
    inputValue,
    handleChange,
    resetValue,
  };
}
