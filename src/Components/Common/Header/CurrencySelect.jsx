import {useContext} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CoinsContext } from '../../../Context/CoinsProvider.jsx';

export default function CurrencySelect() {
    const {currency, setCurrency} = useContext(CoinsContext)

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 10, fontSize: "1rem" }} size="small">
            <InputLabel id="demo-select-small-label" sx={{color: "var(--primary)"}}>Currency</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={currency}
                label="Currency"
                onChange={handleChange}
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
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
        </FormControl>
    );
}
