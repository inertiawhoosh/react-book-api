import React, { Component } from 'react';
import Header from './Header/header';
import Main from './Main/main'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
     	<Main />
      </div>
    );
  }
}

export default App;
