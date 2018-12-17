import './todoList.scss'

class TodoList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        const list = res.slice(1, 21);
        this.setState({ list });
      });
  }

  render() {
    const { list } = this.state;

    return (
      <ol>
        {
          list.map(({completed, id, title}) => (
            <li key={id} className={completed ? 'completed' : 'active'}>
              {title}
              <div className="menu">
                <span>X</span>
                <span>V</span>
                <span>~</span>
              </div>
            </li>
          ))
        }
      </ol>
    );
  }
}

export default TodoList;
