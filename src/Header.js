import React, {Component} from 'react';

import Background from './img/pencils.jpeg';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '300px',
    backgroundSize: 'cover'
}

class Header extends Component {
  
    render() {
        return (

            <header style= {myStyles}>

            </header>
        );
    }

};

export default Header;