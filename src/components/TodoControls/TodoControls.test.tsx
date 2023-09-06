import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest'
import {TodoControls} from './index'; // Import your TodoControls component
import {FilterOptions} from '../types';

describe('TodoControls Component', () => {
    it('renders the TodoControls component with correct values', () => {
        // Sample props data
        const props = {
            itemsLeft: 3,
            filterOption: 'all' as FilterOptions,
            onFilterOptionChange: vi.fn(),
            onClearCompleted: vi.fn(),
        };

        render(<TodoControls {...props} />);

        // Check if the number of items left is displayed correctly
        expect(screen.getByText('3 items left')).toBeInTheDocument();

        // Check if the filter radio buttons are rendered correctly
        expect(screen.getByText('all')).toBeInTheDocument();
        expect(screen.getByText('active')).toBeInTheDocument();
        expect(screen.getByText('completed')).toBeInTheDocument();

        // Check if the Clear Completed button is rendered
        expect(screen.getByText('Clear Completed')).toBeInTheDocument();
    });

    it('calls onFilterOptionChange when a filter option is selected', () => {
        // Sample props data
        const props = {
            itemsLeft: 3,
            filterOption: 'all' as FilterOptions,
            onFilterOptionChange: vi.fn(),
            onClearCompleted: vi.fn(),
        };

        render(<TodoControls {...props} />);

        // Simulate clicking the "Active" filter option
        fireEvent.click(screen.getByLabelText('active'));

        // Verify if onFilterOptionChange has been called with the correct value
        expect(props.onFilterOptionChange).toHaveBeenCalled();
    });

    it('calls onClearCompleted when Clear Completed button is clicked', () => {
        // Sample props data
        const props = {
            itemsLeft: 3,
            filterOption: 'all' as FilterOptions,
            onFilterOptionChange: vi.fn(),
            onClearCompleted: vi.fn(),
        };

        render(<TodoControls {...props} />);

        // Simulate clicking the Clear Completed button
        fireEvent.click(screen.getByText('Clear Completed'));

        // Verify if onClearCompleted has been called
        expect(props.onClearCompleted).toHaveBeenCalled();
    });
});
