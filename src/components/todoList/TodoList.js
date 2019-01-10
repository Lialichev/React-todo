import './todoList.scss'

class TodoList extends Component {
  render() {
    const { list } = this.props;
    
    return (
      <ol>
        {
          list.map(({ done, id, title }) => (
            <li key={id}>
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
