import React from 'react';
import { Toolbar, ToolbarGroup } from '@material-ui/core'
// import Toolbar from "material-ui/Toolbar/Toolbar";
// import ToolbarGroup from "material-ui/Toolbar/ToolbarGroup";

import DBLogo from './Images/DBLogo.png';



const Header = ({
    backgroudColor
}) => (
    <Toolbar style ={
        {
            width: "100%",
            height: "73px",
            nackgroudColor: backgroudColor
        }
    }>
        <ToolbarGroup>
            <div className="logoImage">
                <img src={DBLogo}/>
            </div>

        </ToolbarGroup>
    </Toolbar>
)


export default Header;