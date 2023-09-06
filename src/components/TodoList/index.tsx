import { Checkbox, List } from 'antd';
import { Todo } from '../types';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface TodoListProps {
  list: Todo[];
  onItemClick: (item: Todo) => (e: CheckboxChangeEvent) => void;
}

export const TodoList = ({ list, onItemClick }: TodoListProps) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={
              <Checkbox checked={item.status === 'completed'} onChange={onItemClick(item)}>
                {item.content}
              </Checkbox>
            }
          />
        </List.Item>
      )}
    />
  );
};
