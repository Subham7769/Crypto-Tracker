import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import './style.css'

const PaginationComponent = ({page, setPage,handleChange}) => {

  return (
    <div className="Pagination-item">
      <Pagination
        count={10}
        page={page}
        onChange={(event,value)=>handleChange(event,value)}
        sx={{
          color: "var(--black)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--black)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
};
export default PaginationComponent;
