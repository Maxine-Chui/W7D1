import React from 'react';
import TodoListItem from './todo_list_item';

// module.exports = () => <h3>Todo List goes here!</h3>;

class TodoList extends React.Component {
  render(){
// <li key={idx}>{todo.title}</li>)
    return (
      <ul>
        {
          this.props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}/>)
        }
      </ul>
    );
  }

}
export default TodoList;
