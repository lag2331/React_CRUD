import { Route } from 'react-router-dom';
import List from './pages/List';
import Read from './pages/Read';
import Write from './pages/Write';

const App = () => {
  return (
    <>
      <Route component={List} path='/list'/>
      <Route component={Read} path='/read'/>
      <Route component={Write} path='/write'/>
    </>
  );
};

export default App;