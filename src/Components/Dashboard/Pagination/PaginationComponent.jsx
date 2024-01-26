import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';


const PaginationComponent = ()=> {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}
export default  PaginationComponent