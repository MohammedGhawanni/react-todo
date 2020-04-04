import React, { Component } from "react";
import { TodoItem } from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      todos: [],
      todoIdCounter: 0,
    };

    this.updateAddTodo = this.updateAddTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleComepleteTodo = this.toggleComepleteTodo.bind(this);
  }

  updateAddTodo(e) {
    const newInputValue = e.target.value;
    this.setState({ input: newInputValue });
  }

  handleAddTodo() {
    this.setState((currentState) => {
      const todoLabel = currentState.input;
      return {
        input: "",
        todos: currentState.todos.concat([
          {
            todoId: currentState.todoIdCounter,
            label: todoLabel,
            complete: false,
          },
        ]),
      };
    });
    this.setState((currentState) => {
      return { todoIdCounter: currentState.todoIdCounter++ };
    });
  }

  deleteTodo(todoId) {
    this.setState((currentState) => {
      return {
        todos: currentState.todos.filter((todo) => todo.todoId !== todoId),
      };
    });
  }

  toggleComepleteTodo(todoId) {
    this.setState((currentState) => {
      const todoToComplete = currentState.todos.find(
        (todo) => todo.todoId === todoId
      );
      return {
        todos: currentState.todos
          .filter((todo) => todo.todoId !== todoId)
          .concat([
            {
              label: todoToComplete.label,
              complete: !todoToComplete.complete,
              todoId: currentState.todoIdCounter,
            },
          ]),
      };
    });
    this.setState((currentState) => {
      return { todoIdCounter: currentState.todoIdCounter++ };
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.updateAddTodo}
          placeholder="Add Todo Here.."
          name="addTodo"
          id="addTodo"
        />
        <button onClick={this.handleAddTodo}>Submit</button>

        <hr />

        <h2>Todo List:</h2>
        {this.state.todos.map((todo) => (
          <TodoItem
            key={todo.todoId}
            todo={todo}
            deleteTodo={this.deleteTodo}
            toggleComepleteTodo={this.toggleComepleteTodo}
          />
        ))}
      </div>
    );
  }
}
