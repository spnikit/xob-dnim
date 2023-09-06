import {Input, Layout, Space} from 'antd';
import {useTodoList} from "./hooks/useTodoList";
import {useTodoFilter} from "./hooks/useTodoFilter";
import {filterOptions, initialState} from "./components/constants";
import {TodoList} from "./components/TodoList";
import {TodoControls} from "./components/TodoControls";


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
        <>
            <Layout>
                <Layout.Content style={{margin: '0 auto', padding: '10px'}}>
                    <Space direction="vertical" style={{marginTop: '20px'}} size="middle">
                        <Input placeholder="What needs to be done?" onPressEnter={handleInputEnter}
                               allowClear={true}/>
                        <TodoList list={list} onItemClick={handleTodoClick}/>
                        <TodoControls
                            filterOption={filterOption} itemsLeft={itemsLeft}
                            onFilterOptionChange={handleFilterOptionChange}
                            onClearCompleted={handleClearCompleted}
                        />
                    </Space>
                </Layout.Content>
            </Layout>
        </>
    )
}

export default App


/*
* layout
* input
* list -> карточка todo
* filter panel with buttons
* add clear completed logic
* move all list operations to separate hook
* min height 170px
* */