import React, { useContext } from 'react'
import { InputLabel, MenuItem, Select } from '@mui/material'
import {CoinsContext} from "../../../Context/CoinsProvider.jsx"
import FormControl from '@mui/material/FormControl';
import "./styles.css"

const Filters = () => {
    const {sortType, setSortType} = useContext(CoinsContext)
    const handleSortInputChange=(e)=>{
        setSortType(e.target.value)
    }
  return (
    <div className='filters-div'>
        <FormControl sx={{ m: 1, minWidth: 10, fontSize: "1rem" }} size="small">
            <InputLabel id="demo-select-small-label"  sx={{color: "var(--primary)"}}>Sort</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={sortType}
                label="Sort"
                onChange={handleSortInputChange}
                sx={{
                    height: "2rem",
                    color: "var(--black)",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary)",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "var(--black)",
                    },
                    "&:hover": {
                        "&& fieldset": {
                            borderColor: "var(--primary)",
                        },
                    },
                }}
            >
                <MenuItem value={"popularity"}>Popularity</MenuItem>
                <MenuItem value={"a-z"}>Name(a-z)</MenuItem>
                <MenuItem value={"z-a"}>Name(z-a)</MenuItem>
                <MenuItem value={"price-h-l"}>Price(high-low)</MenuItem>
                <MenuItem value={"price-l-h"}>Price(low-high)</MenuItem>
                <MenuItem value={"change-h-l"}>Price change(high-low)</MenuItem>
                <MenuItem value={"change-l-h"}>Price change(low-high)</MenuItem>
            </Select>
            </FormControl>
    </div>
  )
}

export default Filters