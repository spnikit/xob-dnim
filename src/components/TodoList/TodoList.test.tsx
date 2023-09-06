import React from 'react';
import {describe, expect, it, vi} from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react';
import {TodoList} from './index';
import {Todo} from "../types"; // Import your TodoList component

describe('TodoList Component', () => {
    // Sample test data
    const todoList: Todo[] = [
        {id: '1', content: 'Task 1', status: 'completed'},
        {id: '2', content: 'Task 2', status: 'active'},
    ];

    it('renders the TodoList component with items', () => {
        render(<TodoList list={todoList} onItemClick={(item) => () => {
        }}/>);

        // Check if the TodoList component renders with the correct items
        const items = screen.getAllByRole('checkbox');
        expect(items).toHaveLength(todoList.length);

        // Check if the text of each checkbox is correct
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    it('calls onItemClick when a checkbox is clicked', () => {
        const onItemClickMock = vi.fn();
        render(<TodoList list={todoList} onItemClick={onItemClickMock}/>);

        // Simulate clicking the first checkbox
        const firstCheckbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(firstCheckbox);

        // Verify if onItemClick has been called with the correct item
        expect(onItemClickMock).toHaveBeenCalledWith(todoList[0]);
    });
});
