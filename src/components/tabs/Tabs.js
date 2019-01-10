import { TabNav } from './TabNav';
import { Tab } from './Tab';

import './tabs.scss';

export class Tabs extends Component {
  state = {
    currentIndex: this.props.selectedIndex || 0
  };

  selectTab = (currentIndex) => {
    this.setState({ currentIndex });
  };

  render() {
    const { children } = this.props;
    const { currentIndex } = this.state;
    const tabs = children.filter(child => child.type === Tab);
    const titles = tabs.map(tab => tab.props.title);

    return (
      <div className="tabs">
        <TabNav
          tabs={titles}
          currentIndex={currentIndex}
          selectTab={this.selectTab}
        />
        <section className="tab-content">
          {tabs[currentIndex].props.children}
        </section>
      </div>
    );
  }
}
