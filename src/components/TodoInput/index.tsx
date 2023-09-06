import { Button, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useTodoInput } from '../../hooks/useTodoInput';
import { KeyboardEvent } from 'react';

interface TodoInputProps {
  handleInputEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleAddButton: (value: string) => void;
}

export const TodoInput = ({ handleInputEnter, handleAddButton }: TodoInputProps) => {
  const { inputValue, handleChange, resetValue } = useTodoInput();

  return (
    <Input
      placeholder="What needs to be done?"
      onChange={handleChange}
      value={inputValue}
      onPressEnter={handleInputEnter}
      allowClear={true}
      suffix={
        <Button
          onClick={() => {
            inputValue && handleAddButton(inputValue);
            resetValue();
          }}
          type="text"
          shape="circle"
          icon={<PlusCircleOutlined />}
        />
      }
    />
  );
};
