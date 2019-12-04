import React from 'react';
import Header from './components/Header';
import Main from './components/page/Main';
import Footer from './components/Footer'
import NewPost from './components/page/NewPost'
import { Route, Switch } from 'react-router-dom'
import About from './components/page/About'
import Authors from './components/page/Authors';
import SinglePost from './components/page/SinglePost';



function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/posts/:id" component={SinglePost} />
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
