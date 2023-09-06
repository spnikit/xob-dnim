import { FilterOptions, Todo } from './types';
import uniqueId from 'lodash.uniqueid';

export const filterOptions: FilterOptions[] = ['all', 'active', 'completed'];

export const initialState: Todo[] = [
  { id: uniqueId(), content: 'todo-1', status: 'active' },
  { id: uniqueId(), content: 'todo-2', status: 'active' },
  { id: uniqueId(), content: 'todo-3', status: 'active' },
];

export const spacingSize = 50;
