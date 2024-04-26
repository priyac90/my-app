import React from 'react'
import "./Datatable.scss";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import {userColumns, userRows} from "../../mockData";
import { Link} from "react-router-dom";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
function CustomToolbar() {
  return (
    <GridToolbarContainer className='exportBtn'>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const actionColumn=[{
    field: "action",
    headerName: "Action",
    width:200,
    renderCell:(params)=>{
      return(
        <div className='cellAction'>
        <Link to="/users/test" style={{textDecoration:"none"}}>
          <div className='editButton'><CreateIcon/></div>
          </Link>
          <div className='deleteButton' onClick={() => handleDelete(params.row.id)}><DeleteIcon/></div>
        </div>
      );
    },
    },
  ];
  return (
    <div className='datatable'>
       <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
      <div className='datatableTitle'>
        <Link to="/users/new" className= "link" style={{textDecoration: "none"}}>
          Add New
          </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        slots={{ toolbar: CustomToolbar, showQuickFilter: true}}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable