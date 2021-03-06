import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header>
        </Header>
        
        {this.props.children}

        <Footer>
        </Footer>
      </div>
    )
  }
}

// const Layout = () => {
//   return (
//     <div>
//       <Header>
//       </Header>
//       {this.props.children}
//       <Footer>
//       </Footer>
//     </div>
//   )
// }
// export default Layout;