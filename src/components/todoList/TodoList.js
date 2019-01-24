import './todoList.scss'

class TodoList extends Component {
  render() {
    const { list } = this.props;
    
    return (
      <ol>
        {
          list.map(({ done, id, title }) => {
            const stateItem = done ? 'done' : (done !== undefined ? 'active' : '');

            return (
              <li key={id} className={stateItem}>
                {title}
                <div className="menu">
                  <span>X</span>
                  <span>V</span>
                  <span>~</span>
                </div>
              </li>
            )
          })
        }
      </ol>
    );
  }
}

export default TodoList;
