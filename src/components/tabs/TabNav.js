export const TabNav = ({ tabs, currentIndex, selectTab }) => {
  const itemClick = (e, i) => {
    e.preventDefault();
    selectTab(i);
  };

  return (
    <nav className="nav-tab">
      <ul>
        {
          tabs.map((tab, i) => (
            <li
              key={i}
              className={currentIndex === i ? 'active' : ''}
            >
              <a
                href="#"
                onClick={e => itemClick(e, i)}
              >
                {tab}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
