export type Todo = {
    id: string;
    content: string;
    status: TodoStatus;
};

export type FilterOptions = 'all' | 'active' | 'completed';
export type TodoStatus = Exclude<FilterOptions, 'all'>;
