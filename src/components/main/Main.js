import TodoList from '../todoList';
import {Tabs, Tab} from '../tabs';
import Login from '../../pages/login';
import {todoList} from '../../services/todoList';
import {checkUser} from '../../services/user.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
      user: null
    };

    this.days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    this.currentDay = new Date().getDay() - 1;
  }

  componentDidMount() {
    todoList()
      .then(list => this.setState({ list }));
    checkUser()
      .then(user => this.setState({ user }))
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
            ? <h3>Hello !</h3>
            : <Login onLogin={this.onLogin}/>
        }
        {
          list
            ? <Tabs selectedIndex={this.currentDay}>
              {
                list.map((elem, index) => (
                  <Tab title={this.days[index]} key={index}>
                    <TodoList list={elem}/>
                    <a href="/">Добавить новый</a>
                  </Tab>
                ))
              }
              </Tabs>
            : 'Loading...'
        }
      </main>
    );
  }
}

export default Main;
