import React, {Component} from 'react';
import './Header.css';
import Background from './img/wormseye.jpeg';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '60vh',
    backgroundSize: 'cover'
}

class Header extends Component {
  
    render() {
        return (

            <header style= {myStyles}>
                <h1>{this.props.title}</h1>
                <p>Full stack developer, freelancer and<br/>teacher, based in Denver, Colorado.</p>

            </header>
        );
    }

};

export default Header;