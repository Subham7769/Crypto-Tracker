import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import CommonNavlinks from "./CommonNavlinks";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="humburger" />
      </IconButton>
      <Drawer  anchor={"right"} open={open} onClose={() => setOpen(false)}>
          <CommonNavlinks className={"mobileMenu"}/>
      </Drawer>
    </div>
  );
}
