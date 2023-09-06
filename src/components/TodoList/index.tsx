import { Checkbox, List, Typography } from 'antd';
import { Todo } from '../types';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface TodoListProps {
  list: Todo[];
  onItemClick: (item: Todo) => (e: CheckboxChangeEvent) => void;
}

export const TodoList = ({ list, onItemClick }: TodoListProps) => {
  const { Text } = Typography;

  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => {
        const itemCompleted = item.status === 'completed';
        return (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Checkbox checked={itemCompleted} onChange={onItemClick(item)}>
                  <Text delete={itemCompleted} disabled={itemCompleted}>
                    {item.content}
                  </Text>
                </Checkbox>
              }
            />
          </List.Item>
        );
      }}
    />
  );
};
