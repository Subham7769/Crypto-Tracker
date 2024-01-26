import React from "react";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import "./style.css";
import Grid from "./../Grid";
import List from "../List";


export default function TabComponent({ coins }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "var(--black)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };



  return (

    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="1" sx={style} />
          <Tab label="List" value="2" sx={style} />
        </TabList>
        <TabPanel value="1">
          <div className="gridView">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="2">

          <table className="ListView">

            {coins.map((coin, i) => {
              return <List coin={coin} key={i} />
            })}

          </table>

        </TabPanel>
      </TabContext>
    </ThemeProvider>

  );
}
