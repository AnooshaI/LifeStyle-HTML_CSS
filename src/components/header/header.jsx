import React from 'react';
import '../header/headerg.scss';
import logo from '../../assets/logo.PNG';
import Dp from '../../assets/boy-sunset.jpg';
export const Header = () => {
    return(
        <div className="main">
            <div className="header">
                    <div className="logo"> <img src={logo} alt='Logo'/></div> 
            <div className="nav">
            <nav>
                <div className="navItems">
                 <a href="#">World   </a>    
                 <a href="#"> Sports   </a>
                 <a href="#"> Opinion</a>
                 <a href="#"> Lifestyle</a>
                 <a href="#"> Business</a>
                 <a href="#"> Culture</a>
                 <a href="#"> Fashion</a>
                 <a href="#"> Tech</a>
                </div>
            </nav>
            </div>
              <div>  <img className="Dp"  src={Dp} alt='DP'/> </div>
                
            </div>
        </div>

    )
}

export default Header;