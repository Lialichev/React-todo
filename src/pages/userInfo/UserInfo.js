import PropTypes from 'prop-types';

import './userinfo.scss';

class UserInfo extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    info: PropTypes.object
  };

  static defaultProps = {
    info: {},
    user: {}
  };

  render() {
    const {user, info} = this.props;

    return (
      <div className="userInfo">
        <h1>Personal area</h1>
        <div className="userInfo__greeting">
          Hello, <span className="bold">{user.firstName}</span>
        </div>
        {
          info && (
            <>
              <ul className="userInfo__data">
                <li>
                  You have <span className="bold">{info.categories}</span> categories
                  (<span className="bold">{info.publishedCategories}</span> published)
                </li>
                <li>You have <span className="bold">{info.products}</span> products</li>
              </ul>
              <a href="#">Go to categories</a>
            </>
          )
        }
      </div>
    )
  }
}

export default UserInfo;
