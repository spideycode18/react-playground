import React from 'react';
import './input.scss';
import { TodoProps, Filter } from '../../types';

interface Props {
  handleSubmit: (todo: TodoProps) => void;
}

interface State {
  todo: string;
}
class TodoInput extends React.Component<Props, State> {
  public state: State = {
    todo: ''
  }

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({todo: event.target.value});
  }

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(this.state.todo) {
      this.props.handleSubmit({todo: this.state.todo, status: Filter.ONGOING});
      this.setState({todo: ''});
    }
  }

  render() {
    return (
      <form action="" className="form-input" onSubmit={this.handleSubmit}>
        <input className="input" type="text" placeholder="What do you want to do?" value={this.state.todo} onChange={this.handleChange} />
      </form>
    );
  }
}

export default TodoInput;
