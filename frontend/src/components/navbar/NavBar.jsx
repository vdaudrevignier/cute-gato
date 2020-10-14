import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import '../../css/Navbar.less'

class NavBar extends Component {
    render(){
        return (
            <nav className = 'NavBarItems'>
                <ul className = 'items'>
                    {MenuItems.map((item, index)=>{
                        return (
                        <li key = {index}>
                            <a className = {item.cName} href = {item.url}>
                                {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;