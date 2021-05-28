// import { NavLink } from "react-router-dom";
// import classes from "./NavItem.module.css"

import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = ({url, children , exact, active}) => {
    return ( 
        <li className={classes.NavItem}>
            {/* <a href={url} className={active ? classes.active : null}>{children}</a> */}
            <NavLink to={url} activeClassName={classes.active} exact={exact}>{children}</NavLink>
        </li>
     );
}
 
export default NavItem;