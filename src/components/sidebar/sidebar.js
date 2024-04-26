import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Groups2Icon from '@mui/icons-material/Groups2';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AssessmentIcon from '@mui/icons-material/Assessment';
import  logo  from "../../assets/images/logo_inventory.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='sidebar'>
         <div className='top'>
   <img src={logo} className='imgLogo mr-2'></img>
          <span className='logo'>Darlaston</span></div>
         <div className='center'>
            <ul>
              <p className= 'title'>MAIN</p>
              <Link to="/DashBoardPage" style={{textDecoration:"none"}}>
            <li>
              <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            </Link>
            <p className= 'title'>LISTS</p>
            <Link to="/products" style={{textDecoration:"none"}}>
            <li>
            <ProductionQuantityLimitsIcon className='icon'/>
                <span>Products</span>
            </li>
            </Link>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
            <Groups2Icon className='icon'/>
                <span>Customers</span>
            </li>
            </Link>
            <p className= 'title'>DETAILS</p>
            <li>
            <InventoryIcon className='icon'/>
                <span>Inventory</span>
            </li>
            <li>
            <ListAltIcon className='icon'/>
                <span>Sales</span>
            </li>
            <li>
            <FileCopyIcon className='icon'/>
                <span>Invoices</span>
            </li>
            <p className= 'title'>GENERAL INFO</p>
            <li>
            <AssessmentIcon className='icon'/>
                <span>Reports</span>
            </li>
         </ul>
            </div>
         <div className='bottom'>
          <div className='colorOption'></div>
          <div className='colorOption'></div>
         </div>

    </div>
  )
}

export default Sidebar