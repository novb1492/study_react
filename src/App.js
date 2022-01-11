import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.development';
import Subject from './components/Subject.js';
import Nav from './components/nav';

//여기가 app.vue 페이지가바뀌는곳
class App extends Component{
  constructor(props){//초기화 state 사용하려면 이렇게 해야한다
    super(props);
    this.state={
      suject:{title:'title',sub:'www'}
    }
  }
  render(){
    return (
      <div className="App">
        <Subject title={this.state.suject.title}></Subject>
        <Nav one="11"></Nav>
        hello
      </div>
    );
  }
}
export default App;
