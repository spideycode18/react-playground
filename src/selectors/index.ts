import { createSelector } from 'reselect';
import { Filter, TodoProps } from '../types';
import { AppState } from '../types';

export const getVisibleTodos = createSelector(
  [ (state: AppState) => state.todos, (state: AppState) => state.filter ],
  (todos: TodoProps[], filter: Filter) => todos.filter((item: TodoProps) => filter === Filter.ALL || item.status === filter)
);

export const getFilter = createSelector(
  (state: AppState) => state.filter,
  (filter: Filter) => filter
);