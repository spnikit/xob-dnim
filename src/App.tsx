import {Input} from 'antd';
import {useTodoList} from "./hooks/useTodoList";
import {useTodoFilter} from "./hooks/useTodoFilter";
import {filterOptions, initialState} from "./components/constants";
import {TodoList} from "./components/TodoList";
import {TodoControls} from "./components/TodoControls";
import {TodoLayout} from "./components/TodoLayout";


function App() {
    const {filterOption, handleFilterOptionChange} = useTodoFilter(filterOptions[0]);
    const {
        itemsLeft,
        handleClearCompleted,
        handleInputEnter,
        handleTodoClick,
        list
    } = useTodoList(initialState, filterOption);


    return (
        <TodoLayout>
            <Input placeholder="What needs to be done?" onPressEnter={handleInputEnter}
                   allowClear={true}/>
            <TodoList list={list} onItemClick={handleTodoClick}/>
            <TodoControls
                filterOption={filterOption} itemsLeft={itemsLeft}
                onFilterOptionChange={handleFilterOptionChange}
                onClearCompleted={handleClearCompleted}
            />
        </TodoLayout>
    )
}

export default App


/*
* add header
* make clear button disabled if no completed items
* try to make input clear after enter
* maybe add button to input
* add min height
* */