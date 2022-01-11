import { Component } from 'react/cjs/react.development';

class Nav extends Component{
    render(){
        var data=this.props.one;
        var lists=[];
        for(var i=0;i<data.length;i++){
            lists.push(<li>{data[i].id}{data[i].title}</li>);
        }
      return(
        <ul>
          {lists}
        </ul>
      );
    }
}
export default Nav;