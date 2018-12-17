import TodoList from '../todoList';
import UserInfo from '../userInfo';

const Main = () => (
  <main>
    <h1>React Todo</h1>
    <TodoList />
    <UserInfo
      name="Vladislav"
      categories={10}
      published={3}
      products={50}
      link="#"
    />
  </main>
);

export default Main;
