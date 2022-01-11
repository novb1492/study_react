import { Component } from 'react/cjs/react.development';
 
class Subject extends Component{
    render(){
      return(
        <div>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();{/*이벤트를 받아서 호출한다*/}
          }.bind(this)}>{this.props.title}</a></h1>
          <hr></hr>
        </div>
      );
    }
}
export  default Subject;