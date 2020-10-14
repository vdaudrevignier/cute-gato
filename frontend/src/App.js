import React from 'react';
import './App.less';
import Cats from './components/CatsList';
import Top5Cats from './components/Top5Cats';
import Navbar from './components/navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path='/' exact component={Cats} />
          <Route path='/cats' exact component={Cats} />
          <Route path='/top5' exact component={Top5Cats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
