import { Component } from 'react/cjs/react.development';

class Nav extends Component{
    render(){
      return(
        <ul>
          <li>{this.props.one}</li>
          <li>2</li>
        </ul>
      );
    }
}
export default Nav;