import { Filter, TodoProps } from '../types';

export enum Actions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  SET_STATUS = 'SET_STATUS',
  SET_FILTER = 'SET_FILTER'
}

export interface TodoAction {
  type: string;
  payload: TodoProps
}

export interface FilterAction {
  type: string;
  filter: Filter
}

export const addTodo = (todo: TodoProps): TodoAction => {
  return {
    type: Actions.ADD_TODO,
    payload: todo
  }
}

export const removeTodo = (todo: TodoProps): TodoAction => {
  return {
    type: Actions.REMOVE_TODO,
    payload: todo
  }
}

export const setStatus = (todo: TodoProps): TodoAction => {
  return {
    type: Actions.SET_STATUS,
    payload: todo
  }
}

export const setFilter = (filter: Filter): FilterAction => {
  return {
    type: Actions.SET_FILTER,
    filter
  }
}