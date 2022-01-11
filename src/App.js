import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.development';
import Subject from './components/Subject.js';
import Nav from './components/nav';
import Contents from './components/contents';
//여기가 app.vue 페이지가바뀌는곳
class App extends Component{
  constructor(props){//초기화 state 사용하려면 이렇게 해야한다
    super(props);
    this.state={
      mode:'welcome',
      welcome:{title:'welcome',desc:'hello'},
      suject:{title:'title',sub:'www'},
      navs:[{id:1,title:'subtitle'},{id:2,title:'subtitle2'}]
    }
    //이방식을 사용하면 state=>props로 자동으로 넣어주는거 같다
  }
  render(){
    var title=null;
    var desc=null;
    if(this.state.mode=='welcome'){
      title=this.state.welcome.title;
      desc=this.state.welcome.desc;
    }else if(this.state.mode=='read'){
      title=this.state.navs[0].id;
    }
    return (
      <div className="App">
        <Subject title={this.state.suject.title} 
        onChangePage={function(){
          this.setState({
            mode:'read'
          })
        }.bind(this)}>{/*이벤트를 걸어줘야한다*/}
        </Subject>
        <Nav one={this.state.navs}></Nav>
        <Contents title={title} desc={desc}></Contents>
      </div>
    );
  }
}
export default App;
