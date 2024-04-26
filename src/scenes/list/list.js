import React from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Datatable from "../../components/datatable/Datatable";
const list = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
       <Datatable/>
      </div>
    </div>
  );
};

export default list;
