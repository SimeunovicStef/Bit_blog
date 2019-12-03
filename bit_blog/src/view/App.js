import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import NewPost from './components/NewPost'
import { Route } from 'react-router-dom'
import '../../src/App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/posts/new" component={NewPost} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
