import { Component } from 'react/cjs/react.development';

class Nav extends Component{
    render(){
        var data=this.props.one;
        var lists=[];
        for(var i=0;i<data.length;i++){
            lists.push(<li key={i}>{data[i].id}{data[i].title}</li>);//리액트는 반복문시 고유의 키값을 줘야함 
        }
      return(
        <ul>
          {lists}
        </ul>
      );
    }
}
export default Nav;