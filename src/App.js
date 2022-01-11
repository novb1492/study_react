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
         <div>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();//리액트는 클릭이벤트시 이벤트값을 준다 태그의 기본 설정 행동을 막을 수있는코드
            this.setState({
              mode:'read'
            })//state바꾸는법 bind로 this객체 넘겨주기
          }.bind(this)}>{this.state.suject.title}</a></h1>
          <hr></hr>
        </div>
        {/*<Subject title={this.state.suject.title}></Subject>*/}
        <Nav one={this.state.navs}></Nav>
        <Contents title={title} desc={desc}></Contents>
      </div>
    );
  }
}
export default App;
