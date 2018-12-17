import './userinfo.scss';

const UserInfo = ({ name, categories, published, products, link }) => {
  return (
    <div className="userInfo">
      <div className="userInfo__greeting">
        Hello, <span className="bold">{name}</span>
      </div>
      <ul className="userInfo__data">
        <li>
          You have <span className="bold">{categories}</span> categories
          (<span className="bold">{published}</span> published)
        </li>
        <li>You have <span className="bold">{products}</span> products</li>
      </ul>
      <a href={link}>Go to categories</a>
    </div>
  )
};

export default UserInfo;
