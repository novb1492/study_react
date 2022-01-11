import { Component } from 'react/cjs/react.development';
 
class Subject extends Component{
    render(){
      return(
        <div>
          <h1><a href="">{this.props.title}</a></h1>
          <hr></hr>
        </div>
      );
    }
}
export  default Subject;