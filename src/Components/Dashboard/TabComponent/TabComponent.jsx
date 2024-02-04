import React from "react";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import "./style.css";
import Grid from "../Grid/Grid.jsx";
import List from "../List/List.jsx";

export default function TabComponent({ coins }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
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
            {coins.map((coin, index) => {
              return <Grid coin={coin} key={index} index={index} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <table className="ListViewTable">
            <tbody className="ListView">
              {coins.map((coin, index) => {
                return <List coin={coin} key={index} index={index} />;
              })}
            </tbody>
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
