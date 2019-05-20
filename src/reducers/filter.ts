import { Filter } from '../helper';
import { FilterAction, Actions } from '../actions';

const filter = (state: Filter = Filter.ALL, action: FilterAction): Filter => {
  switch (action.type) {
    case Actions.SET_FILTER :
      return action.filter
    default:
      return state
  }
}

export default filter;