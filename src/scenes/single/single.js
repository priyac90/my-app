import React from 'react'
import "./single.scss";
import Charts from "../../components/Charts/charts";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import List from "../../components/Table/Table";
const single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit User</div>
          <h1 className='title'>Information</h1>
          <div className='item'>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='itemImg'/>
          <div className='details'>
            <h1 className='itemTitle'>John Smith</h1>
          <div className='detailItem'>
           <span className="itemKey">Email:</span>
           <span className="itemKey">johnsmith@gmail.com</span>
          </div>
          <div className='detailItem'>
           <span className="itemKey">Phone:</span>
           <span className="itemKey">(+971) 0765432112</span>
          </div>
          <div className='detailItem'>
           <span className="itemKey">Address:</span>
           <span className="itemKey">Apt 12, Down Street, London.</span>
          </div>
          <div className='detailItem'>
           <span className="itemKey">Country:</span>
           <span className="itemKey">UK</span>
          </div>
          </div>
          </div>
          </div>
          <div className="right">
            <Charts aspect={3 / 1} title="User Transaction ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List/>
        </div>
      </div>
    </div>
  );
};

export default single;