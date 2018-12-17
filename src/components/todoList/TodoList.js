import './todoList.scss'

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.originList = [];

    this.state = {
      list: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        this.originList = res.slice(1, 21);
        this.setState({ list: this.originList })
      });
  }

  filterList = ({ target }) => {
    this.setState({
      search: target.value,
      list: this.originList.filter(({ title }) => title.includes(target.value))
    })
  };

  render() {
    const { list } = this.state;

    return (
      <>
        <input
          type="text"
          onChange={this.filterList}
          placeholder="Search"
        />
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
      </>
    );
  }
}

export default TodoList;
