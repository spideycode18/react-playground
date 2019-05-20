import { TodoProps } from '../helper';
import { TodoAction, Actions } from '../actions';

const todos = (state: TodoProps[] = [], action: TodoAction): TodoProps[] => {
  switch (action.type) {
    case Actions.ADD_TODO :
      return [
        ...state,
        action.payload
      ]
    case Actions.REMOVE_TODO :
      return state.filter((item: TodoProps) =>
        item.todo !== action.payload.todo
      )
    case Actions.SET_STATUS :
      return state.map((item: TodoProps) =>
        item.todo === action.payload.todo ? action.payload : item
      )
    default:
      return state
  }
}

export default todos;