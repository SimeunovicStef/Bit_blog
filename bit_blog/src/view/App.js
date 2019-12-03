import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import NewPost from './components/NewPost'
import { Route, Switch } from 'react-router-dom'
import '../../src/App.css'
import About from './components/About'
import Authors from './components/Authors';


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/posts/new" component={NewPost} />
        <Route path="/authors" component={Authors} />
        <Route path="/about" component={About} />
        <Route path="/" component={Main} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
