import { useTodoList } from './hooks/useTodoList';
import { useTodoFilter } from './hooks/useTodoFilter';
import { filterOptions, initialState } from './components/constants';
import { TodoList } from './components/TodoList';
import { TodoControls } from './components/TodoControls';
import { TodoLayout } from './components/TodoLayout';
import './App.css';
import { TodoInput } from './components/TodoInput';

function App() {
  const { filterOption, handleFilterOptionChange } = useTodoFilter(filterOptions[0]);
  const { itemsLeft, handleClearCompleted, handleInputEnter, handleTodoClick, list, addItemToList } = useTodoList(
    initialState,
    filterOption,
  );

  return (
    <TodoLayout>
      <TodoInput handleInputEnter={handleInputEnter} handleAddButton={addItemToList} />
      <TodoList list={list} onItemClick={handleTodoClick} />
      <TodoControls
        filterOption={filterOption}
        itemsLeft={itemsLeft}
        onFilterOptionChange={handleFilterOptionChange}
        onClearCompleted={handleClearCompleted}
      />
    </TodoLayout>
  );
}

export default App;

/*
 * make clear button disabled if no completed items
 * add min height
 * add strike strough to completed
 * */
