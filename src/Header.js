import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const[{ basket, user}] = useStateValue();
    console.log(basket);
    console.log('Login',user)

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <nav className = "header">
            <Link to="/">
                <img className="header_logo" src = "https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt ="Amazon Logo"/>
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className = "header_searchIcon" />
            </div>

            <div className = "header_nav">
                {/* 1st link */}
                <Link className = "header_link" to={!user && "/login"} >
                    <div onClick = {login} className = "header_option">
                        <span className = "header_optionLine1">Hello {user?.email}</span>
                        <span className = "header_optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link className = "header_link" to="/login" >
                    <div className = "header_option">
                        <span className = "header_optionLine1">Returns</span>
                        <span className = "header_optionLine2">& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link className = "header_link" to="/login" >
                    <div className = "header_option">
                        <span className = "header_optionLine1">Try</span>
                        <span className = "header_optionLine2">Prime</span>
                    </div>
                </Link>
                {/* Basket */}
                <Link to = "/checkout" className = "header_link">
                    <div className = "header_optionBasket ">
                        {/* Basket icon */}
                        <ShoppingCartIcon />
                        {/* No of items */}
                        <span className = "header_optionLine2 header_basketCount">{ basket?.length }</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header

/*
-> logo
->search box
->3 links 
->basket icon- puchase number 
*/