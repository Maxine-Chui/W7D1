import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from './reducers/root_reducer';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors';




document.addEventListener("DOMContentLoaded", function(){
  const rootElement = document.getElementById('root');
  ReactDOM.render(<h1>Todos App</h1>, rootElement);
  const store = configureStore();
  // ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store} />, rootElement);
});
