import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.development';
import Subject from './components/Subject.js';
class Nav extends Component{
  render(){
    return(
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    );
  }
}
//여기가 app.vue 페이지가바뀌는곳
class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="동적"></Subject>
        <Nav></Nav>
        hello
      </div>
    );
  }
}
export default App;
