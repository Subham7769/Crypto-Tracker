import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import './style.css'
import coinsContext from "../../../Context/coinsContext";

const PaginationComponent = () => {
  const {page,handlePageChange}= useContext(coinsContext)

  return (
    <div className="Pagination-item">
      <Pagination
        count={10}
        page={page}
        onChange={(event,value)=>handlePageChange(event,value)}
        sx={{
          color: "var(--black)",
          "& .Mui-selected ": {
            backgroundColor: "var(--primary) !important",
            color: "#fff !important",
            borderColor: "var(--primary) !important",
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
