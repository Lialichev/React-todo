import TodoList from '../todoList';
import {Tabs, Tab} from '../tabs';
import Login from '../../pages/login';
import {todoList} from '../../services/todoList';
import {checkUser} from '../../services/user.js';

class Main extends Component {
  state = {
    list: ['hi', 'by'],
    login: false,
    userName: ''
  };

  componentDidMount() {
    todoList()
      .then(list => this.setState({list}))
  }

  onLogin = (user) => {
    this.setState({
      login: true,
      userName: user.firstName
    });
  };

  render() {
    const {list, login, userName} = this.state;
    console.log(list);

    return (
      <main>
        <h1>React Todo</h1>
        {
          login
            ? <h3>Hello {userName}!</h3>
            : <Login onLogin={this.onLogin}/>
        }
        <Tabs>
          {
            list.map(e => {
              return (
                <Tab title="Tab 1" key={e}>
                  <h3>Tab header 1</h3>
                </Tab>
              );
            })
          }
        </Tabs>
      </main>
    );
  }
}

export default Main;
