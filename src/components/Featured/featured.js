import React from "react";
import "./featured.scss";
import { MoreVert } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
const featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgress value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">$420</p>
      </div>
    </div>
  );
};
export default featured;
