import { useState } from "react"
import Drawer from "../Drawer/Drawer"
import Toolbar from "../Toolbar/Toolbar"
import classes from "./Layout.module.css"

const Layout = () =>{ 
    const[drawerOpen, setDrawerOpen] = useState(false)
    return(
<ul className={classes.Layout}>
 <div>
     <Toolbar openDrawer={()=>setDrawerOpen(true)}/>
     <Drawer open={drawerOpen} closeDrawer={()=>setDrawerOpen(false)}/> 
     </div>   
</ul>
    )
}
export  default Layout