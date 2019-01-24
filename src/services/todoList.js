import { rest } from './rest';

const todoList = () => rest.get('tasks');

export { todoList };
