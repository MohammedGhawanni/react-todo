import React, {Component} from 'react';

export class TodoItem extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          <li>
            Label: {this.props.todo.label}
          </li>
          <li>
            Complete: {`${this.props.todo.complete}`}
          </li>
          <li>
            <button onClick={() => {this.props.deleteTodo(this.props.todo.todoId)}}>X</button>
          </li>
          <li>
            <button onClick={() => this.props.toggleComepleteTodo(this.props.todo.todoId)}></button>
          </li>
        </ul>
      </div>
    )
  }
}