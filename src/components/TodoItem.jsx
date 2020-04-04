import React, { Component } from "react";
import { IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export  class TodoItem extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
          Label: {this.props.todo.label}
            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={() => this.props.deleteTodo(this.props.todo.todoId)}
            >
              <DeleteIcon />
            </IconButton>
            <Checkbox
              checked={this.props.todo.complete}
              onChange={() =>this.props.toggleComepleteTodo(this.props.todo.todoId)}
              color="primary"
            />
      </div>
    );
  }
}
