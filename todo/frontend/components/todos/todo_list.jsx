import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';

// module.exports = () => <h3>Todo List goes here!</h3>;

class TodoList extends React.Component {

  constructor(props) {
     super(props);
    //  console.log(this.props);
   }

  render(){
// <li key={idx}>{todo.title}</li>)
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}/>)
          }
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }

}
export default TodoList;
