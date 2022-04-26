import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgClose from 'react-icons/cg';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
const Navbar = (props) => {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => {
        setSideBar(!sidebar)
    }

    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar'>
                <Link to={'#'} className="menu-bars">
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars' onClick={showSideBar}>
                            <CgClose.CgClose/>
                        </Link>
                    </li>
                    {SidebarData.map((link,index)=>{
                        return (
                            <li key={index} className={link.className} onClick={showSideBar}>
                                <Link to={!link.disabled?link.path:false}>{link.icon}
                                <span>{link.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}
export default Navbar;