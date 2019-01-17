import TodoList from '../todoList';
import { Tabs, Tab } from '../tabs';
import Login from '../../pages/login';
import { todoList } from '../../services/todoList';
import { checkUser } from '../../services/user.js';
import { days, currentDay } from "../../const";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
      user: null
    };
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ user }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      todoList()
        .then(list => this.setState({ list }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  };

  render() {
    const { list, user } = this.state;

    return (
      <main>
        <h1>React Todo</h1>
        {
          user
            ? <h3>Hello {user.firstName}!</h3>
            : <Login onLogin={this.onLogin}/>
        }
        {
          list && (
            <Tabs selectedIndex={currentDay}>
            {
              list.map((elem, index) => (
                <Tab title={days[index]} key={index}>
                  <TodoList list={elem}/>
                  <a href="/">Добавить новый</a>
                </Tab>
              ))
            }
          </Tabs>
          )
        }
      </main>
    );
  }
}

export default Main;
