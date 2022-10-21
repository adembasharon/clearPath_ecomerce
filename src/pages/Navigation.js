import React from "react";
import './Navigation.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/icons-material/ShoppingCart';




const Navbar=()=>{
    return(
        <div className="nav">
          
        <div className="nav nav-items">
        <div>
                <h1>LOGO</h1>
            </div>
            <p>About Us</p>
            <p>Shop</p>
            <p>Login/SignUp</p>
            <p><Badge badgeContent={10} color="primary">
  <ShoppingCartIcon color="action" />
</Badge>Cart </p>
  
          
        </div>

        </div>
    )
}
export default Navbar;