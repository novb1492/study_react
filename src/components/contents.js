import { Component } from 'react/cjs/react.development';

class Contents extends Component{
    render(){
      return(
        <div>
            <hr></hr>
            {this.props.title}
            <br></br>
            {this.props.desc}
        </div>
      );
    }
}
export default Contents;