import ReactDom from 'react-dom';

import Main from './components/main';

import './normalize.scss';

const Wrapper = (
  <>
    <Main />
  </>
);

ReactDom.render(Wrapper, document.getElementById('app'));
