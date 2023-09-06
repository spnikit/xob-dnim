import { KeyboardEvent, useState } from 'react';
import { FilterOptions, Todo } from '../components/types';
import uniqueId from 'lodash.uniqueid';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

export function useTodoList(initialState: Todo[], filterOption: FilterOptions) {
  const [todoList, setTodoList] = useState(initialState);
  const filteredList = filterOption === 'all' ? todoList : todoList.filter((todo) => todo.status === filterOption);
  const itemsLeft = todoList.filter((item) => item.status === 'active').length;

  const handleInputEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (target.value.trim()) {
      setTodoList((prev) => [{ id: uniqueId(), content: target.value, status: 'active' }, ...prev]);
    }
  };

  const handleTodoClick = (item: Todo) => (e: CheckboxChangeEvent) => {
    let changedTodoList: Todo[] = [];
    if (e.target.checked) {
      changedTodoList = todoList.map((todo) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            status: 'completed',
          } as Todo;
        }

        return todo;
      });
    } else {
      changedTodoList = todoList.map((todo) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            status: 'active',
          } as Todo;
        }

        return todo;
      });
    }
    setTodoList(changedTodoList);
  };

  const handleClearCompleted = () => {
    const listWithoutCompleted = todoList.filter((todo) => todo.status !== 'completed');
    setTodoList(listWithoutCompleted);
  };

  return {
    handleClearCompleted,
    handleInputEnter,
    handleTodoClick,
    list: filteredList,
    itemsLeft,
  };
}
